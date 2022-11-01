import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products?: Product[];
  @Input() product?: Product;

  constructor(private productService: ProductService,
              private location: Location) { 
  }

  ngOnInit(): void {
    this.getProductsOrderByIdDesc(0, 10);
    this.product = this.location.getState() as Product;
  }

  getProductsOrderByIdDesc(startAt: number, productsPerQuery: number) {
    this.productService.getProductsOrderByIdDesc(startAt, productsPerQuery)
      .subscribe(products => this.products = products);
  }

  goToLink(link: string) {
    window.open(link, "");
  }
}
