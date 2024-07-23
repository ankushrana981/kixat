import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/app/environments/environment';
import { HomepageService } from 'src/app/modules/homepage/homepage.service';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  sliders: any;
  icons = SVG_ICONS;
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    navSpeed: 1000,
    autoplaySpeed: 2500,
    autoplayTimeout: 3000,
    rtl: true,
    nav: true,
    dotsData: true
  };

  baseUrl = environment.baseUrl;

  constructor(
    private homepageService: HomepageService
  ) { }

  ngOnInit(): void {
    this.homepageService.getHomeSliders().subscribe((data: any) => this.sliders = data);
  }

}
