import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { MetaService } from 'src/app/services/meta-service.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { CartService } from '../cart/cart.service';
import { CompareService } from '../compare/compare.service';
import { FavouriteService } from '../favourite/favourite.service';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  icons = SVG_ICONS;
  products = [
    {
      title: 'سمارت وتش ابل SERIES 8',
      off: 'خصم 10%',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate: '',
      freeShiping: true,
      stock: 12,
      showOption: true,
      image: 'assets/images/product1.png'
    },
    {
      title: ' سامسونج ‎55"‎ AU7000 Crystal UHD 4K Smart TV',
      off: 'خصم 10%',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate: '4.8',
      freeShiping: false,
      stock: 11,
      showOption: false,
      image: 'assets/images/product2.png'
    },
    {
      title: 'هيدفون لاسلكي JBL 700BT الاصلي',
      off: '',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate: '4.8',
      freeShiping: false,
      stock: 2,
      showOption: false,
      image: 'assets/images/product3.png'
    },
    {
      title: 'لابتوب Macbook pro 15 inch',
      off: '',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate: '4.8',
      freeShiping: true,
      stock: 2,
      showOption: false,
      image: 'assets/images/product4.png'
    },
    {
      title: 'سمارت وتش ابل SERIES 8',
      off: 'خصم 10%',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate: '',
      freeShiping: true,
      stock: 12,
      showOption: true,
      image: 'assets/images/product5.png'
    },
    {
      title: ' سامسونج ‎55"‎ AU7000 Crystal UHD 4K Smart TV',
      off: 'خصم 10%',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate: '4.8',
      freeShiping: false,
      stock: 0,
      showOption: false,
      image: 'assets/images/product6.png'
    },
  ];
  productId: any;
  productInfo: any;
  isLoading: boolean = false;
  baseUrl = environment.baseUrl;
  activeSize = 'Choose Option';
  activeColor= 'Choose Option';
  quantityOptions = 10;
  quantity = 1;
  pageNumber = 1;
  pageSize = 10;

  constructor(
    private cartService: CartService,
    private compareService: CompareService,
    private wishlistService: FavouriteService,
    private productDetailService: ProductDetailsService,
    private router: Router,
    private meta: MetaService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.productId = this.router.url.split('/')[2];
    if (this.productId) this.getDetail();
   }

  getDetail() {
    this.isLoading = true;
    this.productDetailService.getProductDetail(this.productId).subscribe(data => {
      this.isLoading = false;
      this.productInfo = data;
      this.loadReviews(this.productInfo);
      this.meta.setMetaTags(this.productInfo.metaTitle, this.productInfo.metaDescription, this.productInfo.metaKeywords)
    }, error => {
      this.isLoading = false
    });
  }

  loadReviews(data:any) {
    this.productDetailService.getReviews(data.id, data.name,1,10).subscribe(data => {
      console.log('getReviews',data)
    }, error => {
      console.log('getReviews error',error)
    })
  }

  compare(id: any) {
    let data = { productId: id };
    this.compareService.addCompare(data).subscribe(data => {
      this.router.navigateByUrl(`/compare`);
    }, error => {
    })
  }

  addWishlist(id: any) {
    let data = { productId: id, quantity: this.quantity };
    this.wishlistService.addWishlist(data).subscribe((data:any) => {
      this.alert.message(data.message);
      this.router.navigateByUrl(`/favourite`);
    }, error => {
    })
  }

  addToCart(product:any) {
    console.log('product Info',product);
    let data = {productId: product.id, variationName: '', quantity: this.quantity}
    this.cartService.addCart(data).subscribe((data:any)=> {
      console.log('addCart', data);
      this.alert.message(`${data.productName} has been added to your cart`);
      this.router.navigateByUrl(`/cart`);
    }, error => {
      console.log('addCart error', error)
    })
  }

}
