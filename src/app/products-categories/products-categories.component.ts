import { AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Categorie } from '../model/categorie';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {

  products?: Product[];
  perfumes?: Product[];
  casaProducts?: Product[];
  slides?: NodeListOf<Element>;
  maxSlide?: number;
  curSlide?: number = 0;
  countSlides: number = 0;
  slidesInterval?: NodeJS.Timer;

  categorieOne?: Product[];
  categorieTwo?: Product[];
  categorieThree?: Product[];

  catOne?: Categorie = { categorieName: '', categorieProducts: [] };
  catTwo?: Categorie = { categorieName: '', categorieProducts: [] };
  catThree?: Categorie = { categorieName: '', categorieProducts: [] };

  categories = [this.catOne, this.catTwo, this.catThree];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsOrderByIdAsc(0, 10);
    this.getPerfumesOrderByIdAsc(0, 10);
    this.getCasaProductsByIdAsc(0, 10);
    this.getCategorieOne();
    this.getCategorieTwo();
    this.getCategorieThree();
  }

  getProductsOrderByIdAsc(startAt: number, productsPerQuery: number) {
    this.productService.getProductsOrderByIdAsc(startAt, productsPerQuery).
      subscribe(products => this.products = products);
  }

  getPerfumesOrderByIdAsc(startAt: number, productsPerQuery: number) {
    this.productService.getPerfumesOrderByIdAsc(startAt, productsPerQuery).
      subscribe(perfumes => this.perfumes = perfumes);
  }

  getCasaProductsByIdAsc(startAt: number, productsPerQuery: number) {
    this.productService.getCasaOrderByIdAsc(startAt, productsPerQuery)
      .subscribe(casaProducts => this.casaProducts = casaProducts);
  }

  getCategorieOne() {
    this.productService.getProductsOrderByIdAsc(0, 6)
      .subscribe(categorieOne => {
        this.categorieOne = categorieOne
        // this.categories[0] = this.categorieOne;
        this.catOne!.categorieName = "Mais vendidos";
        this.catOne!.categorieProducts = this.categorieOne;
      });
  }

  getCategorieTwo() {
    this.productService.getProductsOrderByPriceAsc(0, 6)
      .subscribe(categorieTwo => {
        this.categorieTwo = categorieTwo
        // this.categories[1] = this.categorieTwo;
        this.catTwo!.categorieName = "Artigos para Bebês";
        this.catTwo!.categorieProducts = this.categorieTwo;
      });
  }

  getCategorieThree() {
    this.productService.getProductsOrderByNameAsc(0, 6)
      .subscribe(categorieThree => {
        this.categorieThree = categorieThree
        // this.categories[2] = this.categorieThree;
        this.catThree!.categorieName = 'Outros';
        this.catThree!.categorieProducts = this.categorieThree;
      });
  }
}
