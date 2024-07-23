import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api-service.service';
import { DataService } from 'src/app/services/data-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form!:FormGroup;
  icons = SVG_ICONS; 
  show: boolean = false;
  loginError:any;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private authService: AuthApiService,
    private router: Router,
    private dataService: DataService,
    private alert: AlertService
  ) { 
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  } 
  ngOnInit(): void {
    
  }

  togglePassword() {
    this.show = !this.show;
  }

  submit() {
    this.form.value.isGuestLogin = false;
    this.isLoading = true;
    this.authService.login(this.form.value).subscribe((response:any)=> {
      console.log('api res', response);
      this.isLoading = false;
      if(response.status == true) {
        localStorage.setItem('token', response.data.token);
        this.dataService.isLoged(true);
        this.authService.myProfile().subscribe(user=> {
          console.log('user', user);
          localStorage.setItem('user', user.fullName);
          this.dataService.user(user.fullName);
        }, error => {
          console.log('myProfile error', error)
        });
        this.alert.message('You are successfully logged in');
        this.router.navigateByUrl(`/`);
      } else {
        this.loginError = response.message;
      }
    }, error=> {
      this.isLoading = false;
      this.loginError = error.error;
    })
  }
}
