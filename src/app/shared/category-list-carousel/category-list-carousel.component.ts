import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/app/environments/environment';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-category-list-carousel',
  templateUrl: './category-list-carousel.component.html',
  styleUrls: ['./category-list-carousel.component.scss']
})
export class CategoryListCarouselComponent implements OnInit {

  @Input('data') categories:any;
  @Input('style') style:any;
  baseUrl = environment.baseUrl;

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    autoplay: false,
    dots: false,
    autoplayHoverPause: true,
    items: 3,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    rtl: true,
    responsive: {
      0: {
        items: 2,
        stagePadding: 25
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
  };

  icons = SVG_ICONS;

  constructor() { }

  ngOnInit(): void {
  }

}
