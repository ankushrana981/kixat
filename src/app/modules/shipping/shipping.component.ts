import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  icons = SVG_ICONS;

  form!:FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      firstName:  ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      governorate: [],
      city: [],
      address: [],
      title: []
    })
  }
}
