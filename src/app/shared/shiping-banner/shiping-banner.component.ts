import { Component, OnInit } from '@angular/core';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-shiping-banner',
  templateUrl: './shiping-banner.component.html',
  styleUrls: ['./shiping-banner.component.scss']
})
export class ShipingBannerComponent implements OnInit {
  
  icons = SVG_ICONS;
  constructor() { }

  ngOnInit(): void {
  }

}
