import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent {
  form!: FormGroup;
  form2!: FormGroup;
  icons = SVG_ICONS;
  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['Sara@Kixat.com', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
    this.form2 = this.fb.group({
      oldpassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  togglePassword() {
    this.show = !this.show;
  }

  togglePassword2() {
    this.show2 = !this.show2;
  }

  togglePassword3() {
    this.show3 = !this.show3;
  }
}
