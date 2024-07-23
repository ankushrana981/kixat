import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/services/auth-api-service.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form!:FormGroup;
  icons = SVG_ICONS;
  isLoading:boolean = false;
  response:any;
  errorMessage:any;
  successMessage:any;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthApiService
  ) { 
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      code: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isLoading = true;
    this.authService.resetPassword(this.form.value).subscribe(data => {
      this.isLoading = false;
      if(data.status == true) this.response = data[0].description;
      else this.errorMessage = data.message;
    }, error => {
      this.isLoading = false;
      this.errorMessage = error.error[0].description;
      console.log('error',error)
    });
  }

}
