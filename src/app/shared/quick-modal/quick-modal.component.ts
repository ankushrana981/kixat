import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/modules/cart/cart.service';
import { CompareService } from 'src/app/modules/compare/compare.service';
import { FavouriteService } from 'src/app/modules/favourite/favourite.service';
import { ProductDetailsService } from 'src/app/modules/product-details/product-details.service';
import { UserService } from 'src/app/services/user-service.service';
import { AlertService } from '../alert/alert.service';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-quick-modal',
  templateUrl: './quick-modal.component.html',
  styleUrls: ['./quick-modal.component.scss']
})
export class QuickModalComponent {

  icons = SVG_ICONS;
  @Input('product') productId:any;
  data:any;
  isLoading: boolean = false;
  activeSize = 'Choose Option';
  activeColor= 'Choose Option';
  quantity = 1;

  constructor(
    private cartService: CartService,
    private compareService: CompareService,
    private wishlistService:FavouriteService,
    private productDetailService: ProductDetailsService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
    console.log('ngInit fired =>', this.productId);
    this.getProductInfo(this.productId);
  }

  addToCart(product:any) {
    console.log('product Info',product);
    let data = {productId: product.id, variationName: '', quantity: this.quantity}
    this.cartService.addCart(data).subscribe((data:any)=> {
      this.alert.message(`${data.productName} has been added to your cart`);
    }, error => {
      console.log('addCart error', error)
    })
  }

  getProductInfo(id:any) {
    this.isLoading = true;
    this.productDetailService.getProductOverview(id).subscribe(data=> {
      this.isLoading = false;
      this.data = data;
      console.log('getProductOverview', data)
    }, error => {
      this.isLoading = false;
      console.log('getProductOverview error', error)
    })
  }

  compare(id: any) {
    let data = { productId: id };
    this.compareService.addCompare(data).subscribe((data:any) => {
      this.alert.message(data.message);
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

}
