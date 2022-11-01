import { state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  search: string = "";
  casaProducts?: Product[];

  constructor(private router: Router,
              private casaService: ProductService) { }
  
  ngOnDestroy(): void {
    this.search = "";
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goCategories() {
    this.router.navigate(['/categories']);
  }

  goBlog() {
    let product: Product = {productId: 1,
                            productName: 'carrinho',
                            productDescription: 'carrinho de madeira',
                            productPrice: 34.5,
                            productImageUrl: '',
                            productLink: '', 
                          }
  }

  doSearch(searchUrl: string) {
      this.casaService.doSearch(searchUrl).
        subscribe(casaProducts => {
          this.casaProducts = casaProducts;

          this.router.navigateByUrl('', { 
            skipLocationChange: true
           
          }).then(() => {
            console.log(casaProducts);
            this.router.navigateByUrl('/search-products', {
              state: casaProducts
            });
          });
        });

    this.search = "";
  }
}
