import { Component } from '@angular/core';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-my-addressses-empty',
  templateUrl: './my-addressses-empty.component.html',
  styleUrls: ['./my-addressses-empty.component.scss']
})
export class MyAddresssesEmptyComponent {
  icons = SVG_ICONS;
}
