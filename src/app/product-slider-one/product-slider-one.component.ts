import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-product-slider-one',
  templateUrl: './product-slider-one.component.html',
  styleUrls: ['./product-slider-one.component.scss']
})
export class ProductSliderOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
