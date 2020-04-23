import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Producto;
  form: FormGroup;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.form = this.fb.group( {
      key: [''],
      titulo: ['', Validators.required],
      valor: ['', Validators.required],
      disponible: [''],
      fotoUrl: ['']
    } );
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new' ) {
      this.productsService.getProduct(id)
        .subscribe( resp => {
          console.log(resp);
          this.product = resp;
          this.product.key = id;
          this.form.patchValue({
            key: this.product.key,
            titulo: this.product.titulo,
            valor: this.product.valor,
            disponible: this.product.disponible,
            fotoUrl: this.product.fotoUrl
          });
        } );
    }
  }

  saveProduct() {
    if (this.form.invalid) {
      return this.markFormGroupTouched(this.form);
    }
    this.product = this.form.value;

    if (this.product.key === null || this.product.key === '') {
      this.productsService.saveProduct(this.product)
        .subscribe( resp => {
          console.log(resp);
        } );
    }else{
      this.productsService.updateProduct(this.product.key, this.product)
        .subscribe( resp => {
          console.log(resp);
        });
    }

  }

  get tituloValido() {
    return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  }
  get valorValido() {
    return this.form.get('valor').invalid && this.form.get('valor').touched;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      }
    });
  }

}
