import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const productUrl = 'http://localhost:8080/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(productUrl+productId)
  }

  getProductsOrderByIdAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl+'id-asc/?params='+startAt+','+productsPerQuery);
  }

  getProductsOrderByIdDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl+'id-desc/?params='+startAt+','+productsPerQuery);
  }

  getProductsOrderByNameAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl+'name-asc/?params='+startAt+','+productsPerQuery);
  }

  getProductsOrderByNameDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl+'name-desc/?params='+startAt+','+productsPerQuery);
  }

  getProductsOrderByPriceAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl+'price-asc/?params='+startAt+','+productsPerQuery);
  }

  getProductsOrderByPriceDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl+'price-desc/?params='+startAt+','+productsPerQuery);
  }

}
