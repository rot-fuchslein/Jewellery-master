import { Component } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface CatalogItem {
  nameKey: string;
  materialKey: string;
  price: number;
  isNew: boolean;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, CurrencyPipe, TranslateModule],
  templateUrl: './catalog.component.html',
  styleUrl: './page.scss'
})
export class CatalogComponent {
  readonly filterKeys = ['catalog.filters.new', 'catalog.filters.available', 'catalog.filters.sale'];

  readonly items: CatalogItem[] = [
    { nameKey: 'catalog.products.moonRing.name', materialKey: 'catalog.products.moonRing.material', price: 120, isNew: true },
    { nameKey: 'catalog.products.pearlEarrings.name', materialKey: 'catalog.products.pearlEarrings.material', price: 95, isNew: false },
    { nameKey: 'catalog.products.minimalBracelet.name', materialKey: 'catalog.products.minimalBracelet.material', price: 140, isNew: true },
    { nameKey: 'catalog.products.silverNecklace.name', materialKey: 'catalog.products.silverNecklace.material', price: 160, isNew: false }
  ];
}
