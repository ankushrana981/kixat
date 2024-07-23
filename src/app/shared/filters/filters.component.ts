import { Component, Input, OnInit } from '@angular/core';
import { SVG_ICONS } from '../svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  icons = SVG_ICONS;
  colors = ['red', 'blue', 'pink', 'yellow', 'black'];
  @Input('data') filters:any;
  minPrice:any;
  maxPrice:any;

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit this.filters',this.filters)
    if(this.filters && this.filters.price.minPrice) {
      this.minPrice = this.filters.price.minPrice;
      this.maxPrice = this.filters.price.maxPrice;
      this.rangeSlider();
    }
  }

  rangeSlider() {
    const rangeInput: any = document.querySelectorAll(".range-input input"),
      priceInput: any = document.querySelectorAll(".price-input input"),
      range: any = document.querySelector(".slider .progress");
    let priceGap = 50;

    priceInput.forEach((input: any) => {
      input.addEventListener("input", (e: any) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.right = ((minPrice / rangeInput[0].max) * 100) + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.left = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input: any) => {
      input.addEventListener("input", (e: any) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.right = ((minVal / rangeInput[0].max) * 100) + "%";
          range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  }
}
