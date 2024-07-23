import { Component, Input} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss'],
})
export class CategoryCarouselComponent {

  @Input('data') carousel:any;
  @Input('theme') theme:any;
  icons = SVG_ICONS;

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true,
    items: 1,
    navSpeed: 1000,
    autoplaySpeed: 2500,
    autoplayTimeout: 3000,
    rtl: true,
    nav: true,
  };

}
