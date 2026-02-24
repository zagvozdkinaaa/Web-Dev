import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly delete = output<number>();
  currentImageIndex = 0;

  changeImage(index: number) {
    this.currentImageIndex = index;
  }

  shareWhatsApp() {
    const value = this.product();
    const text = `Посмотри на Kaspi: ${value.name} - ${value.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareTelegram() {
    const value = this.product();
    const url = `https://t.me/share/url?url=${encodeURIComponent(value.link)}&text=${encodeURIComponent(value.name)}`;
    window.open(url, '_blank');
  }

  like() {
    this.product().likes++;
  }

  deleteProduct() {
    this.delete.emit(this.product().id);
  }
}
