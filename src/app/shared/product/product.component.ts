import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { CartService } from 'src/app/modules/cart/cart.service';
import { CompareService } from 'src/app/modules/compare/compare.service';
import { FavouriteService } from 'src/app/modules/favourite/favourite.service';
import { AlertService } from '../alert/alert.service';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('data') product:any;
  @Input('view') style:any;
  @Output() modalData = new EventEmitter();
  icons = SVG_ICONS;
  baseUrl = environment.baseUrl;

  constructor(
    private cartService :CartService,
    private compareService: CompareService,
    private wishlistService: FavouriteService,
    private router: Router,
    private alert:AlertService
  ) { }

  ngOnInit(): void {
  }

  quickModal(id:any) {
    this.modalData.emit(id)
  }

  addToCart(product:any) {
    console.log('product Info',product);
    let data = {productId: product.id, variationName: 'jk', quantity: 1}
    this.cartService.addCart(data).subscribe((data:any)=> {
      console.log('addCart', data);
      this.alert.message(`${data.productName} has been added to your cart`);
      this.router.navigateByUrl(`/cart`);
    }, error => {
      console.log('addCart error', error)
    })
  }

  compare(id:any) {
    let data = {productId: id};
    this.compareService.addCompare(data).subscribe((data:any)=> {
        this.alert.message(data.message);
        this.router.navigateByUrl(`/compare`);
    }, error => {
    })
  }

  addWishlist(id:any) {
    let data = {productId: id, quantity: 1};
    this.wishlistService.addWishlist(data).subscribe((data:any)=> {
      this.alert.message(data.message);
      this.router.navigateByUrl(`/favourite`);
    }, error => {
    })
  }
}
