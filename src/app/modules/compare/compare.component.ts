import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { UserService } from 'src/app/services/user-service.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { CompareService } from './compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

  icons = SVG_ICONS; 
  products:any;
  baseUrl = environment.baseUrl;

  constructor(
    private service: UserService,
    private compareService: CompareService,
  ) { }

  ngOnInit() {
    this.getCompare();
  }

  getCompare() {
    this.compareService.getCompares().subscribe((data:any)=> {
      this.products = data.products;
      console.log('products', this.products);
    }, error => {
      console.log('getCompares error', error)
    })
  }

  removeItem(id:any) {
    let data = {id:id}
    this.compareService.removeCompare(data).subscribe((data:any)=> {
      this.products = data.products;
      console.log('removeCompare', this.products);
      this.getCompare();
    }, error => {
      console.log('removeCompare error', error)
    })
  }

}
