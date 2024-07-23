import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SVG_ICONS } from '../../../shared/svg-icons';

@Component({
  selector: 'app-order-details-error',
  templateUrl: './order-details-error.component.html',
  styleUrls: ['./order-details-error.component.scss'],
})
export class OrderDetailsErrorComponent {
  icons = SVG_ICONS;
  form!:FormGroup;
  form2!:FormGroup;
  shiping = [
    {
      status: 'جاري المعالجة',
      date: '20 ديسمبر 2022',
    },
    {
      status:'تم التأكيد',
      date:'21 ديسمبر 2022'
    },
    {
      status:'قيد التوصيل',
      date:'21 ديسمبر 2022'
    },
    {
      status:'تم التوصيل',
      date:'21 ديسمبر 2022'
    }
  ];
  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      comment: ['', [Validators.required]],
      comment2: ['', [Validators.required]],
    });
    this.form2 = this.fb.group({
      comment: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
}
