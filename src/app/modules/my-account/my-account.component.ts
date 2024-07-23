import { Component } from '@angular/core';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  icons = SVG_ICONS;
}
