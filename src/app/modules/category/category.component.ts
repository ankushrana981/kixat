import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from 'src/app/services/user-service.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  sliders: any = [
    {
      title: 'سماعات Anker Soundcore Life A2 Black',
      content: `احصل على إلغاء الضوضاء الأمثل في أي سيناريو بفضل إلغاء الضوضاء النشطة الهجينة Multimode`,
      image: 'assets/images/category-banner.png',
    },
    {
      title: 'سماعات Anker Soundcore Life A2 Black',
      content: `احصل على إلغاء الضوضاء الأمثل في أي سيناريو بفضل إلغاء الضوضاء النشطة الهجينة Multimode`,
      image: 'assets/images/category-banner.png',
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
  ];

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
      name: 'ساعات ذكية',
      image: 'assets/images/product3.png'
    },
    {
      name: 'التابلت و اكسسواراته',
      image: 'assets/images/product4.png'
    },
    {
      name: 'أجهزة التليفزيون و الفيديو',
      image: 'assets/images/product5.png'
    },
    {
      name: 'الكمبيوتر',
      image: 'assets/images/product6.png'
    },
    {
      name: 'التابلت و اكسسواراته',
      image: 'assets/images/product4.png'
    },
    {
      name: 'أجهزة التليفزيون و الفيديو',
      image: 'assets/images/product5.png'
    },
    {
      name: 'الكمبيوتر',
      image: 'assets/images/product6.png'
    }
  ];
  categoryId:any;
  data:any;

  constructor(
    private service: UserService,
    private categories : CategoryService,
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
      let categoryId: any = this.router.url.split('/')[2];
      if (categoryId) this.getCategory(categoryId);
  }

  getCategory(id: any) {
    this.categories.getCategory(id).subscribe(data => {
      this.data = data;
      console.log('category', data)
    }, error => {
      console.log('getCategory err', error)
    })
  }

}
