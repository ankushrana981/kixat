import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCALE_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from './services/user-service.service';
import { AuthApiService } from './services/auth-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private service: UserService,
    private authService: AuthApiService,
    public translate: TranslateService,
    @Inject(LOCALE_ID) locale: string,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.setDefaultLang(locale);
    this.translate.use(locale);
    document.getElementsByTagName("html")[0].setAttribute('lang', locale);
    document.getElementsByTagName("html")[0].setAttribute('dir', locale == 'ar' ? 'rtl' : 'ltr');
    document.getElementsByTagName("body")[0].setAttribute('class', locale == 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', locale);
  }

  title = 'KIXAT';

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (!token) {
      let data = { isGuestLogin: true };
      this.authService.login(data).subscribe((response: any) => localStorage.setItem('token', response.data.token))
    }
  }
}
