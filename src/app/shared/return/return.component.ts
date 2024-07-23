import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent {
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
