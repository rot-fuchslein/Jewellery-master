import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsInCart = signal(0);

  readonly count = this.itemsInCart.asReadonly();

  addItem(quantity = 1): void {
    this.itemsInCart.update((value) => value + quantity);
  }

  clear(): void {
    this.itemsInCart.set(0);
  }
}
