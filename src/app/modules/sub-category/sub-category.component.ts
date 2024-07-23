import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { CategoryService } from '../category/category.service';
declare const bootstrap: any;

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {
  icons = SVG_ICONS;
  isLoading: boolean = false;
  subCategory = [
    {
      name: 'اللابتوب',
      image: 'assets/images/product1.png'
    },
    {
      name: 'الهواتف الذكية',
      image: 'assets/images/product2.png'
    },
    {
      name: 'اللابتوب',
      image: 'assets/images/product1.png'
    }
  ];
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
  ];
  productId: any;
  data: any;
  activeSort = 'Choose Option';

  constructor(
    private categories:CategoryService,
    private router: Router
  ) {

  }


  ngOnInit(): void {
    let categoryId: any = this.router.url.split('/')[2];
    if (categoryId) this.getCategory(categoryId);
  }

  getCategory(id: any) {
    this.isLoading = true;
    this.categories.getSubCategory(id).subscribe(data => {
      this.data = data;
      console.log('category', data)
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log('getCategory err', error)
    })
  }

  getModal(event: any) {
    console.log('getModal event', event);
    this.productId = event;
    let myModal = new bootstrap.Modal(document.getElementById('quickModal'), {});
    myModal.show();
  }

  applySort(option:any) {
    this.activeSort = option.text;
  }

}
