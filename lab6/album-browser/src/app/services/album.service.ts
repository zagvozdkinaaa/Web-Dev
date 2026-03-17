import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // NOTE: use http for environments where HTTPS handshake fails.
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  private readonly albumsSubject = new BehaviorSubject<Album[] | null>(null);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private loadedOnce = false;

  private readonly deletedIds = new Set<number>();
  private readonly titleOverrides = new Map<number, string>();

  readonly loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    this.ensureAlbumsLoaded();
    return this.albumsSubject.asObservable().pipe(map((albums) => albums ?? []));
  }

  getAlbum(id: number): Observable<Album> {
    const cached = this.albumsSubject.value?.find((a) => a.id === id);
    if (cached) {
      return of(this.applyLocalState(cached));
    }
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`).pipe(
      catchError(() => of({ id, userId: 0, title: '(failed to load album)' } satisfies Album)),
      map((a) => this.applyLocalState(a))
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`)
      .pipe(catchError(() => of([] as Photo[])));
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      catchError(() => of(album)),
      tap(() => this.setLocalTitle(album.id, album.title)),
      map(() => this.applyLocalState(album))
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      catchError(() => of(void 0)),
      tap(() => this.markDeleted(id))
    );
  }

  private ensureAlbumsLoaded(): void {
    if (this.loadedOnce || this.loadingSubject.value) {
      return;
    }
    this.loadedOnce = true;

    this.loadingSubject.next(true);
    this.http
      .get<Album[]>(`${this.baseUrl}/albums`)
      .pipe(
        catchError(() => of([] as Album[])),
        // Убираем задержки, если они были в HttpClient
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((albums) => {
        const next = albums
          .filter((a) => !this.deletedIds.has(a.id))
          .map((a) => this.applyLocalState(a));

        this.albumsSubject.next(next);
      });
  }

  private applyLocalState(album: Album): Album {
    if (this.deletedIds.has(album.id)) {
      return album;
    }
    const title = this.titleOverrides.get(album.id);
    return title ? { ...album, title } : album;
  }

  private setLocalTitle(id: number, title: string): void {
    this.titleOverrides.set(id, title);
    const current = this.albumsSubject.value;
    if (!current) return;
    this.albumsSubject.next(current.map((a) => (a.id === id ? this.applyLocalState(a) : a)));
  }

  private markDeleted(id: number): void {
    this.deletedIds.add(id);
    const current = this.albumsSubject.value;
    if (!current) return;
    this.albumsSubject.next(current.filter((a) => a.id !== id));
  }
}

