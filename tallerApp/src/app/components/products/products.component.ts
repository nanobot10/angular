import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Producto[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }


  deleteProduct( key: string ) {
    this.productsService.deleteProduct(key)
      .subscribe( resp => {
        this.getProducts();
      });
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe( resp => {
        this.products = resp;
      });
  }

}
