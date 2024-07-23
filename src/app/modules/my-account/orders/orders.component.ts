import { Component } from '@angular/core';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  icons = SVG_ICONS;
  
  constructor() { }

  ngOnInit(): void {
  }
}
