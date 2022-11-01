import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { fadeIn, fadeOut, scaleIn, scaleOut } from './carousel.animations';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, {params: { time: '500ms' }}) ]),
      transition('* => void', [useAnimation(fadeOut, {params: { time: '500ms'}}) ])
    ])
  ]
})
export class ProductCarouselComponent implements OnInit, OnDestroy {

  @Input() products?: Product[];
  currentSlide: number = 0;
  nextSlide: number = 1;
  lastSlide: number = 2;

  interval: any;

  constructor(private productService: ProductService) { }
  
  ngOnDestroy(): void {
    this.stopSlides();
  }

  ngOnInit(): void {
    this.startSlides();
  }

  getProducts() {
    this.productService.getProductsOrderByIdAsc(2, 7)
      .subscribe( products => this.products = products);
  }

  onPreviousClick() {
    const previous = this.currentSlide -1;
    const mid = this.nextSlide -1;
    const last = this.lastSlide -1;
    this.currentSlide = previous < 0 ? this.products!.length - 1 : previous;
    this.nextSlide = mid < 0 ? this.products!.length -1 : mid;
    this.lastSlide = last < 0 ? this.products!.length -1 : last;
  }

  onNextClick() {
    const next = this.nextSlide;
    const mid = this.lastSlide;
    const last = this.lastSlide + 1;
    this.currentSlide = next === this.products!.length ? 0 : next;
    this.nextSlide = mid === this.products!.length ? 0 : mid;
    this.lastSlide = last === this.products!.length ? 0 : last;
  }

  startSlides() {
    this.interval = setInterval(() => {
      this.onNextClick();
    }, 1500);
  }

  stopSlides() {
    clearInterval(this.interval);
  }
}
