import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
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

  readonly albumId$: Observable<number> = this.route.parent!.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    distinctUntilChanged()
  );

  readonly photos$: Observable<Photo[]> = this.albumId$.pipe(
    switchMap((id) => this.albumService.getAlbumPhotos(id))
  );
}

