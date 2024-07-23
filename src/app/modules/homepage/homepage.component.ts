import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { HomepageService } from './homepage.service';
declare const bootstrap: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  sectionLoaded: boolean = false;
  adsectionLoaded1: boolean = false;
  adsectionLoaded2: boolean = false;
  tabLoaded1: boolean = false;
  tabLoaded2: boolean = false;
  tabLoaded3: boolean = false;
  tabLoaded4: boolean = false;
  tabLoaded5: boolean = false;
  offersLoaded1: boolean = false;
  offersLoaded2: boolean = false;

  bannerLoaded: boolean = false;
  brandLoaded: boolean = false;

  icons = SVG_ICONS;
  strongOffers: any;
  bestSellers: any;
  categories: any;
  offersList: any;
  offers: any;

  deals: any;
  recentProducts: any;
  homeSections: any;
  productId:any;

  @ViewChild('scollWrapper') scollWrapper: any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private homepageService: HomepageService
  ) { }

  ngOnInit(): void {
    this.homepageService.getHomePageCategories().subscribe(data => this.categories = data);
    this.homepageService.getHomepage().subscribe(data => {
      this.homeSections = data;
      this.bannerLoaded = true;
    });
  }

  getModal(event:any) {
    this.productId = event;
    let myModal = new bootstrap.Modal(document.getElementById('quickModal'), {});
    myModal.show();
  }

  resize(index: any) {
    if (index == 1) this.tabLoaded1 = false;
    else if (index == 5) this.tabLoaded2 = false;
    else if (index == 6) this.tabLoaded3 = false;
    else if (index == 7) this.tabLoaded4 = false;
    else this.tabLoaded5 = false;
    setTimeout(() => {
      if (index == 1) this.tabLoaded1 = true;
      else if (index == 5) this.tabLoaded2 = true;
      else if (index == 6) this.tabLoaded3 = true;
      else if (index == 7) this.tabLoaded4 = true;
      else this.tabLoaded5 = true;
      window.dispatchEvent(new Event('resize'));
    }, 800);
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    var children = [].slice.call(this.scollWrapper.nativeElement.children);
    children.forEach((element: any) => {
      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight) - 200) {
          element.classList.add('visible');
          if (element.classList.contains('adsection-3')) setTimeout(() => this.adsectionLoaded1 = true, 700);
          if (element.classList.contains('adsection-4')) setTimeout(() => this.adsectionLoaded2 = true, 700);
          if (element.classList.contains('offer-0')) setTimeout(() => this.offersLoaded1 = true, 700);
          if (element.classList.contains('offer-2')) setTimeout(() => this.offersLoaded2 = true, 700);
          if (element.classList.contains('categories-carousel')) setTimeout(() => this.sectionLoaded = true, 700);
          if (element.classList.contains('tabs-1')) setTimeout(() => this.tabLoaded1 = true, 700);
          if (element.classList.contains('tabs-5')) setTimeout(() => this.tabLoaded2 = true, 700);
          if (element.classList.contains('tabs-6')) setTimeout(() => this.tabLoaded3 = true, 700);
          if (element.classList.contains('tabs-7')) setTimeout(() => this.tabLoaded4 = true, 700);
          if (element.classList.contains('tabs-8')) setTimeout(() => this.tabLoaded5 = true, 700);
          if (element.classList.contains('brands')) setTimeout(() => this.brandLoaded = true, 700);
        };
      }
    });
  }
}
