import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
   
  }

}
