import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

  @Input('data') offer:any;
  baseUrl = environment.baseUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
