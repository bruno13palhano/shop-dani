import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // products?: Product[];
  
  @Input() product?: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  goToLink(link: string) {
    window.open(link, "");
  }
}
