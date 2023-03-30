import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http : HttpClient
  ) { }

  items: Product[] = [];

  /* O addToCart()método anexa um produto a uma matriz de items*/
  addToCart(product : Product) {
    this.items.push(product);
  };
  /* O getItems()método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada */
  getItems() {
    return this.items;
  };

  /* O clearCart()método retorna um array vazio de itens, que esvazia o carrinho */
  clearCart() {
    this.items = [];
    return this.items;
  };

  getShippingPrices() {
    return this.http.get <{type : string, price: number}[]> ('/assets/shipping.json');
  }
}
