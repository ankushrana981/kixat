import { Component, OnInit } from '@angular/core';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  icons = SVG_ICONS;
  searchText: any;
  category = ['Mobile accessories', 'Mobile Cable', 'Mobile case', 'Mobile phone Iphone 14', 'Aplle phones']

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.searchText = '';
  }

}
