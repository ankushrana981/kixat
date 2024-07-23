import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form!: FormGroup;
  icons = SVG_ICONS;
  isLoading: boolean = false;
  successMessage: any;
  errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UserService,
    private authService: AuthApiService,
    private alert:AlertService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  submit() {
    this.isLoading = true;
    if (this.form.value.email !== '') this.forgotPassword({ email: this.form.value.email })
    else this.forgotPassword({ phone: this.form.value.phone })
  }

  forgotPassword(data: any) {
    this.authService.forgotPassword(data).subscribe(
      (data) => {
        this.isLoading = false;
        if (data.status == true) {
          this.alert.message(data.message);
          this.router.navigateByUrl(`/reset-password`);
        }
        else this.errorMessage = data.message;
      },
      (error) => {
        this.isLoading = false;
        console.log('error', error);
      }
    );
  }
}
