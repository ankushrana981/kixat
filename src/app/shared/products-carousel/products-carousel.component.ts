import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SVG_ICONS } from '../svg-icons';
declare const bootstrap: any;

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {

  @Input('data') products: any;
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
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
  };
  @Output() modalData = new EventEmitter();

  icons = SVG_ICONS;
  productId:any;

  constructor() { }

  ngOnInit(): void {
  }

  getModalData(event:any) {
    console.log('products-carousel', event)
   this.modalData.emit(event);
  }

}
