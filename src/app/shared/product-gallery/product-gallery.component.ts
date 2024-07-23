import { Component, Input, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent {

  @Input('gallery') gallery: any;
  @ViewChild('owlMac') owlMac!: CarouselComponent;
  @ViewChild('owlCat') owlCat!: CarouselComponent;

  baseUrl = environment.baseUrl;

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    items: 1,
    nav: false,
    autoplay: true,
    rtl: true,
  }

  thumbOptions:OwlOptions = {
    dots: false,
    items:5,
    nav: false,
    margin:5,
    center: true,
    loop:true,
    mouseDrag: false,
    touchDrag:false,
    rtl: true,
  }

  getPassedData(data:any) {
    if (this.owlMac) this.owlMac.to(data.slides[0].id);
  }

  changeSlide(index:any) {
    if (this.owlCat) {
      this.owlCat.to(index);
    }
    if (this.owlMac) {
      this.owlMac.to(index);
    }
  }

}
