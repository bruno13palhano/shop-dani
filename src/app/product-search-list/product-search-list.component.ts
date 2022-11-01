import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';
import { Location } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-search-list',
  templateUrl: './product-search-list.component.html',
  styleUrls: ['./product-search-list.component.css']
})
export class ProductSearchListComponent implements OnInit {

  @Input()products: Product[] = [];
  res: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res => {
        this.res = res;  
      });

      let i = 0;
      while (this.res[i] !== undefined) {
        this.products.push(this.res[i]);
        i++;
      }
  }

}
