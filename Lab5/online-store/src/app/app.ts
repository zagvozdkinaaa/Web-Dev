import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  readonly categories = signal<Category[]>([]);
  readonly selectedCategoryId = signal<number | null>(null);

  readonly selectedProducts = computed<Product[]>(() => {
    const categoryId = this.selectedCategoryId();
    if (categoryId === null) {
      return [];
    }
    return this.productService.getProductsByCategory(categoryId);
  });

  constructor(private readonly productService: ProductService) {
    this.categories.set(this.productService.getCategories());
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }
}
