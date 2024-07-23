import { Component } from '@angular/core';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent {
  icons = SVG_ICONS;
  products = [
    {
      title: 'سمارت وتش ابل SERIES 8',
      off: 'خصم 10%',
      newRate: '13,903 ج.م',
      oldRate: '15,700 ج.م',
      rate:'',
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
      rate:'4.8',
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
      rate:'4.8',
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
      rate:'4.8',
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
      rate:'',
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
      rate:'4.8',
      freeShiping: false,
      stock: 0,
      showOption: false,
      image: 'assets/images/product6.png'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}
