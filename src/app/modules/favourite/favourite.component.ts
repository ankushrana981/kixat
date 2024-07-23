import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { FavouriteService } from './favourite.service';
declare const bootstrap: any;

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  products:any;
  productId:any;

  constructor(
    private service: UserService,
    private wishlistService: FavouriteService
  ) { }

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites() {
    this.wishlistService.getWishlist(1,20).subscribe((data:any)=>{
      console.log('getWishlist', data);
      this.products = data.items.data;
    })
  }

  getModalData(event:any) {
    this.productId = event;
    let myModal = new bootstrap.Modal(document.getElementById('quickModal'), {});
    myModal.show();
  }

}
