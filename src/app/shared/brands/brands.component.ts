import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HomepageService } from 'src/app/modules/homepage/homepage.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands:any;
  baseUrl = environment.baseUrl;

  constructor(
    private homepageService: HomepageService,
  ) { }

  ngOnInit(): void {
    this.homepageService.getBrands().subscribe(data => this.brands =  data);
  }

}
