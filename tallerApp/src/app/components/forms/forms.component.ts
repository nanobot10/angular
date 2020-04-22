import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/interfaces';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: [''],
      address: this.fb.group({
        city: ['', Validators.required],
        zone: ['']
      }),
    });
   }

  ngOnInit() {
  }

  get lastNameValid(){
    return this.form.get('lastName').invalid && this.form.get('lastName').touched;
  }

  get usernameValid() {
    return this.form.get('username').invalid && this.form.get('username').touched;
  }

  get passwordValid() {
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  get emailValid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get cityValid() {
    return this.form.get('address.city').invalid && this.form.get('address.city').touched;
  }

  saveUser() {
    // si el formulario es invalido marcar todos para desplegar errores
     if (this.form.invalid) {
       return this.markFormGroupTouched(this.form);
     }

     this.form.reset();
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
