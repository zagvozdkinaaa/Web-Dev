import { CommonModule, Location } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly albumService = inject(AlbumService);
  private readonly destroyRef = inject(DestroyRef);

  readonly albumId$: Observable<number> = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    distinctUntilChanged()
  );

  readonly album$: Observable<Album> = this.albumId$.pipe(
    switchMap((id) => this.albumService.getAlbum(id))
  );

  editedTitle = '';
  photosLimit = 12;
  readonly saving = signal(false);
  readonly saved = signal(false);

  constructor() {
    this.album$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((album) => {
      this.editedTitle = album.title;
      this.saved.set(false);
    });
  }

  save(album: Album): void {
    const title = this.editedTitle.trim();
    if (!title || title === album.title) {
      return;
    }

    this.saving.set(true);
    this.albumService.updateAlbum({ ...album, title }).subscribe({
      next: () => this.saved.set(true),
      complete: () => this.saving.set(false),
      error: () => this.saving.set(false)
    });
  }

  backToAlbums(): void {
    this.router.navigate(['/albums']);
  }

  back(): void {
    this.location.back();
  }

  normalizePhotosLimit(): number {
    const n = Math.floor(Number(this.photosLimit));
    const normalized = Number.isFinite(n) ? Math.max(1, n) : 1;
    this.photosLimit = normalized;
    return normalized;
  }

  viewPhotos(): void {
    const limit = this.normalizePhotosLimit();
    this.router.navigate(['photos'], {
      relativeTo: this.route,
      queryParams: { limit }
    });
  }
}

