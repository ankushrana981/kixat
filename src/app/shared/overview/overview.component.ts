import { Component, Input, OnInit } from '@angular/core';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  icons = SVG_ICONS;
  @Input('data') product:any;

  constructor() { }

  ngOnInit(): void {
    console.log('productInfo', this.product)
  }

}
