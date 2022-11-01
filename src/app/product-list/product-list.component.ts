import { state } from '@angular/animations';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  slides?: NodeListOf<Element>;
  maxSlide?: number;
  curSlide?: number = 0;
  countSlides?: number = 0;
  slidesInterval?: NodeJS.Timer;

  product?: Product;
  products?: Array<Product>;
  perfumes?: Array<Product>;
  casaProducts?: Array<Product>;
  mixProducts?: Array<Product> = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getPerfumes();
    this.getCasaProducts();
  }

  getPerfumes() {
    this.productService.getPerfumesOrderByIdAsc(0, 10)
      .subscribe(perfumes => {
        this.perfumes = perfumes;

        for (let i = 0; i <perfumes.length; i++) {
          this.mixProducts!.push(perfumes[i]);
        }
      });
  }

  getProducts() {
    this.productService.getProductsOrderByIdAsc(0, 10)
      .subscribe(products => {
        this.products = products;

        for (let i = 0; i <products.length; i++) {
          this.mixProducts!.push(products[i]);
        }
      });
  }

  getCasaProducts() {
    this.productService.getCasaOrderByIdAsc(0, 10)
      .subscribe(casaProducts => {
        this.casaProducts = casaProducts;

        for (let i = 0; i <casaProducts.length; i++) {
          this.mixProducts!.push(casaProducts[i]);
        }
      })
  }
}
