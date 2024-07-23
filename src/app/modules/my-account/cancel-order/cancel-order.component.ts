import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SVG_ICONS } from '../../../shared/svg-icons';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent {
  icons = SVG_ICONS;
  form!:FormGroup;
  show: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      cause: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }
}
