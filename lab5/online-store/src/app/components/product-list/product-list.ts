import { Component, effect, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  readonly products = input.required<Product[]>();
  readonly displayedProducts = signal<Product[]>([]);

  constructor(private readonly productService: ProductService) {
    effect(() => {
      this.displayedProducts.set(this.products());
    });
  }

  handleDelete(productId: number): void {
    this.displayedProducts.update((items) => items.filter((p) => p.id !== productId));
    this.productService.deleteProduct(productId);
  }
}

