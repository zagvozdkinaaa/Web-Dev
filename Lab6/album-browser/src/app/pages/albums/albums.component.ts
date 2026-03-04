import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  private readonly albumService = inject(AlbumService);

  readonly albums$: Observable<Album[]> = this.albumService.getAlbums();
  readonly loading$ = this.albumService.loading$;

  readonly deletingId = signal<number | null>(null);

  deleteAlbum(id: number, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.deletingId.set(id);
    this.albumService.deleteAlbum(id).subscribe({
      complete: () => this.deletingId.set(null),
      error: () => this.deletingId.set(null)
    });
  }
}

