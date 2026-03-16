import { Component } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CartService } from '../services/cart.service';

interface CatalogItem {
  nameKey: string;
  price: number;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, CurrencyPipe, TranslateModule],
  templateUrl: './catalog.component.html',
  styleUrl: './page.scss'
})
export class CatalogComponent {
  readonly items: CatalogItem[] = [
    { nameKey: 'catalog.products.moonRing.name', price: 115 },
    { nameKey: 'catalog.products.pearlEarrings.name', price: 95 },
    { nameKey: 'catalog.products.minimalBracelet.name', price: 155 },
    { nameKey: 'catalog.products.silverNecklace.name', price: 125 },
    { nameKey: 'catalog.products.moonRing.name', price: 145 },
    { nameKey: 'catalog.products.pearlEarrings.name', price: 75 }
  ];

  constructor(private readonly cartService: CartService) {}

  addToCart(): void {
    this.cartService.addItem();
  }
}
