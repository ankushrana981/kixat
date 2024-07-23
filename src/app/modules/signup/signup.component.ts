import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api-service.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage:any;
  form!: FormGroup;
  icons = SVG_ICONS;
  show: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthApiService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.isLoading = true;
    let data = {
      email: this.form.value.email,
      fullName: this.form.value.firstName +' '+ this.form.value.lastName,
      phoneNumber: this.form.value.phone,
      password: this.form.value.password,
      confirmPassword: this.form.value.password,
    };
    this.authService.register(data).subscribe(data => {
      if(data.status == true) {
        this.isLoading = false;
        this.router.navigateByUrl(`/otp?phone=${data.data.phoneNumber}&user=${data.data.id}`);
      } else {
        this.isLoading = false;
        this.errorMessage = data.message;
      }
    }, error => {
      this.isLoading = false;
      this.errorMessage = error.error[0].description;
      console.log('this.error phone =>', error);
    })
  }

  togglePassword() {
    this.show = !this.show;
  }
}
