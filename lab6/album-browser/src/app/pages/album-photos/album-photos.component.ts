import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly albumService = inject(AlbumService);

  readonly limit$: Observable<number> = this.route.queryParamMap.pipe(
    map((params) => {
      const raw = params.get('limit');
      const n = Math.floor(Number(raw));
      return Number.isFinite(n) ? Math.max(1, n) : 12;
    }),
    distinctUntilChanged()
  );

  readonly albumId$: Observable<number> = this.route.parent!.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    distinctUntilChanged()
  );

  private readonly photos$: Observable<Photo[]> = this.albumId$.pipe(
    switchMap((id) => this.albumService.getAlbumPhotos(id))
  );

  readonly displayedPhotos$: Observable<Photo[]> = combineLatest([this.photos$, this.limit$]).pipe(
    map(([photos, limit]) => photos.slice(0, limit))
  );
}

