import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthApiService } from 'src/app/services/auth-api-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  countDown: any;
  countdownfinish: any;
  counter = 60;
  tick = 1000;
  form!: FormGroup;
  isLoading: boolean = false;
  userId: any;
  phone: any;
  successMessage: any;
  errorMessage: any;
  icons = SVG_ICONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthApiService
  ) {
    this.form = this.fb.group({
      digit1: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      digit2: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      digit3: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      digit4: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      digit5: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      digit6: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
    });
  }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe((count) => {
      if (this.counter == 1 && count) {
        console.log('timer completed', count, this.counter);
        if (this.countDown) {
          this.countDown.unsubscribe();
        }
      }
      --this.counter;
    });
    this.sendOtp();
  }
  sendOtp() {
    this.route.queryParams.subscribe((params: any) => {
      this.userId = params.user;
      this.phone = params.phone;
    });
  }
  submit() {
    let code =
      this.form.value.digit1 +
      this.form.value.digit2 +
      this.form.value.digit3 +
      this.form.value.digit4 +
      this.form.value.digit5 +
      +this.form.value.digit6;
    this.isLoading = true;
    this.authService.verifyPhone(this.userId, code).subscribe(
      (data) => {
        console.log('verifyPhone', data);
        this.router.navigateByUrl(`/login`);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log('verifyPhone error', error);
        this.errorMessage = error.error[0].description;
      }
    );
  }
  resendCode() {
    this.sendOtp();
  }
}
