import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseLayoutService } from 'src/app/base-layout/base-layout.service';
import { MyAccountService } from 'src/app/modules/my-account/my-account.service';
import { AuthApiService } from 'src/app/services/auth-api-service.service';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.scss']
})
export class UpperHeaderComponent implements OnInit {

  direction: string = '';
  icons = SVG_ICONS;
  lang = 'Arabic';
  cultures:any;
  activeLanguage:any;
  countries:any;
  shipping:any;
  
  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private myAccountService:MyAccountService,
    private service: BaseLayoutService,
    private authService : AuthApiService
  ) {  }

  ngOnInit(): void {
    this.service.getCultures().subscribe(data=> {
      this.cultures = data;
      this.activeLanguage = this.cultures[1].name;
    });
    this.myAccountService.getShippingCountries().subscribe(data=> this.countries = data);
  }

  switchLang(lang:any) {
    this.setLanguage(lang.id);
    this.getResources(lang.id);
    this.activeLanguage = lang.name;
    this.lang = this.activeLanguage == 'Arabic' ? 'ar' : 'en';
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    document.getElementsByTagName("html")[0].setAttribute('lang', this.lang);
    document.getElementsByTagName("html")[0].setAttribute('dir', this.lang == 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang',this.lang);
    document.getElementsByTagName("body")[0].setAttribute('class', this.lang == 'ar' ? 'rtl' : 'ltr');
  }

  setLanguage(lang:any) {
    this.service.setLanguage(lang).subscribe(data=> {
      console.log('setLanguage',data);
    });
  }

  getResources(cultureId:any) {
    this.service.getResources(cultureId).subscribe(data=> {
      console.log('getResources',data);
    });
  }

  setShipping(country:any) {
    this.shipping = country.name;
    this.authService.setShippingCountry(country.id).subscribe(data=> {
      console.log('setShippingCountry',data);
    });
  }

}
