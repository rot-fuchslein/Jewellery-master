import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface LatestItem {
  nameKey: string;
  price: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './page.scss'
})
export class HomeComponent {
  readonly latestItems: LatestItem[] = [
    { nameKey: 'home.latest.items.moon', price: 145 },
    { nameKey: 'home.latest.items.choker', price: 95 },
    { nameKey: 'home.latest.items.necklace', price: 110 },
    { nameKey: 'home.latest.items.ring', price: 125 }
  ];
}
