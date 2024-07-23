import { Component, OnInit } from '@angular/core';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  icons = SVG_ICONS;
  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
