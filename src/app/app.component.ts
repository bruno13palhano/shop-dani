import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shope-dani';
  products?: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(0, 2);
  }

  getProducts(startAt: number, productsPerQuery: number) {
    this.productService.getProductsOrderByIdDesc(startAt, productsPerQuery)
      .subscribe(products => this.products = products);
  }
}
