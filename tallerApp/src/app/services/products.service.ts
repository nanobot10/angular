import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'https://flutter-varios-7ce9a.firebaseio.com';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiUrl}/productos.json`)
      .pipe(
        map( this.createArray )
      );
  }

  createArray( productsObj: object ) {
    const products: Producto[] = [];
    if(productsObj === null) {
      return [];
    }
    Object.keys( productsObj ).forEach( key => {
      const producto: Producto = productsObj[key];
      producto.key = key;
      products.push(producto);
    });

    return products;

  }

  getProduct( key: string ) {
    return this.http.get<Producto>(`${this.apiUrl}/productos/${key}.json`);
  }

  saveProduct( product: Producto ) {
    product.key = null;
    return this.http.post(`${this.apiUrl}/productos.json`, product)
      .pipe(
        map( (resp: any) => {
          console.log(resp);
          product.key = resp.name;
          return product;
        })
      )
  }

  updateProduct( key: string, product: Producto ) {
    product.key = null;
    return this.http.put(`${this.apiUrl}/productos/${key}.json`, product)
      .pipe(
        map( (resp: any) => {
          return resp;
        })
      );
  }

  deleteProduct( key: string) {
    return this.http.delete(`${this.apiUrl}/productos/${key}.json`);
  }

}
