import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProductsOrderById(0, 3);
  }

  getProductsOrderById(startAt: number, productsPerQuery: number) {
    this.productService.getProductsOrderByIdDesc(startAt, productsPerQuery).
      subscribe(products => {
        this.products = products
      });
  }

  goToLink(link: string) {
    window.open(link, "");
  }
}
