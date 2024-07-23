import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent {

  @Input() alt:string = '';
  @Input() image:string = '';

  isLoading:boolean;
  
  constructor() { 
    this.isLoading=true;
  }

  hideLoader(){
    this.isLoading=false;
  }
  
}
