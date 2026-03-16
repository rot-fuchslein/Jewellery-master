import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './catalog.component.html',
  styleUrl: './page.scss'
})
export class CatalogComponent {
  readonly demoItems = ['catalog.items.ring', 'catalog.items.earrings', 'catalog.items.bracelet'];
}
