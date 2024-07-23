import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { UserService } from 'src/app/services/user-service.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { CartService } from '../cart/cart.service';
import { MyAccountService } from '../my-account/my-account.service';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  icons = SVG_ICONS;
  addressList: any;
  form!: FormGroup;
  isLoading: boolean = false;
  countries: any;
  states: any;
  cart: any;
  stataProvinceId: string = '1';
  baseUrl = environment.baseUrl;

  constructor(
    private fb: FormBuilder,
    private checkoutService: CheckoutService,
    private service: UserService,
    private cartService: CartService,
    private myAccountService:MyAccountService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      state: [],
      country: [],
      city: [],
      address: ['', [Validators.required]],
      title: [],
    });
  }

  ngOnInit(): void {
    this.getAddressList();
    this.getCountries();
    this.getCart();
    this.getStateProvinces();
    this.getStateProvincesId();
  }

  getCart() {
    this.isLoading = true;
    this.cartService.getCart().subscribe(
      (data) => {
        this.cart = data;
        this.isLoading = false;
        console.log('getCart', data);
      },
      (error) => {
        this.isLoading = false;
        console.log('getCart error', error);
      }
    );
  }
  getShippingAddress() {
    this.checkoutService.getShippingAddrress().subscribe((data) => {
      console.log(data, 'this is a shipping');
    });
  }
  getAddressList() {
    this.service.getAddress().subscribe((data) => {
      console.log(data, 'the Address List');
    });
  }
  onSubmit() {
    console.log(this.form.value.city, 'value sdkfsdn');
    let data = {
      contactName: this.form.value.firstName + ' ' + this.form.value.lastName,
      phone: this.form.value.phone,
      addressLine1: this.form.value.address,
      countryId: this.form.value.country,
      stateOrProvinceId: this.form.value.state,
      city: this.form.value.city,
      email: this.form.value.email,
      governorate: this.form.value.governorate,
      title: this.form.value.title,
    };
    this.service.addAdress(data).subscribe(
      (data: any) => {
        console.log(data, 'address data added');
        this.isLoading = true;

        this.isLoading = false;
      },
      (error) => {
        console.log('error while add address', error);
      }
    );
  }
  defaultAddress() {
    this.service.defaultAdress().subscribe((data) => {
      console.log(data, 'set default address');
    });
  }
  deleteAddress() {
    this.service.deleteAddress().subscribe((data) => {
      console.log(data, 'address deleted');
    });
  }
  getCountries() {
    this.myAccountService.getShippingCountries().subscribe((data) => {
      this.countries = data;
      console.log(this.countries[0].id, 'countries list');
    });
  }
  getState(event: any) {
    let id = event.target.value;
    console.log(id, 'countryID');
    this.service.getState(id).subscribe((data) => {
      this.states = data;
      console.log(this.getState, 'state list');
    });
  }
  getStateProvinces() {
    this.myAccountService.getStateProvinces().subscribe((data) => {
      console.log(data, 'state province');
    });
  }
  getStateProvincesId() {
    this.myAccountService.getStateProvincesId(this.stataProvinceId).subscribe((data) => {
      console.log(data, 'country data ');
    });
  }
}
