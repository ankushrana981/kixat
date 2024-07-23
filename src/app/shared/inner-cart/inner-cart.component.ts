import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { CartService } from 'src/app/modules/cart/cart.service';
import { FavouriteService } from 'src/app/modules/favourite/favourite.service';
import { AlertService } from '../alert/alert.service';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-inner-cart',
  templateUrl: './inner-cart.component.html',
  styleUrls: ['./inner-cart.component.scss'],
})
export class InnerCartComponent implements OnInit {
  couponCode: any;
  showError: boolean = false;
  success: Boolean = false;
  couponForm = new FormGroup({
    coupon: new FormControl('', Validators.required),
  });

  cart: any;
  icons = SVG_ICONS;
  baseUrl = environment.baseUrl;
  isLoading: boolean = false;
  pageLoader: boolean = false;

  constructor(
    private cartService: CartService,
    private wishlistService: FavouriteService,
    private router: Router,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.getCart(false);
  }

  getCart(isPage:any) {
    if(isPage) this.pageLoader = true;
    else this.isLoading = true;
    this.cartService.getCart().subscribe(
      (data) => {
        this.cart = data;
        this.isLoading = false;
        this.pageLoader = false;
        console.log('getCart', data);
      },
      (error) => {
        this.isLoading = false;
        this.pageLoader = false;
        console.log('getCart error', error);
      }
    );
  }

  increaseQuantity(product: any) {
    product.quantity = product.quantity + 1;
    this.updateQuantity(product);
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) product.quantity = product.quantity - 1;
    this.updateQuantity(product);
  }

  onSubmit() {
    let data = { couponCode: this.couponForm.value.coupon };
    this.cartService.applyCoupon(data).subscribe(
      (data) => {
        this.couponCode = data;
        if (this.couponCode.couponCode == null) {
          this.showError = true;
        } else if (this.couponCode.couponCode !== null) {
          this.success = true;
        } else {
          this.showError = false;
        }
      },
      (error) => {
        console.log('applyCoupon error', error);
      }
    );
  }

  updateQuantity(product: any) {
    let data = { cartItemId: product.id, quantity: product.quantity };
    this.cartService.updateCart(data).subscribe(
      (data) => {
        console.log('updateCart', data);
        this.getCart(true);
      },
      (error) => {
        console.log('updateCart error', error);
      }
    );
  }
  removeItem(id: any) {
    this.pageLoader = true;
    this.cartService.removeCart(id).subscribe(
      (data) => {
        this.alert.message(`Item removed successfully from your cart`);
        console.log(data, 'data is removed');
        this.getCart(true);
      },
      (error) => {
        this.pageLoader = false;
        console.log('remove item error', error);
      }
    );
  }

  addWishlist(item:any) {
    let data = { productId: item.id, quantity: item.quantity };
    this.wishlistService.addWishlist(data).subscribe((data:any) => {
      this.alert.message(data.message);
      this.router.navigateByUrl(`/favourite`);
    }, error => {
    })
  }
}
