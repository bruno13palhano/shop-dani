import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const productUrl = 'http://localhost:8080/product/';
const perfumeUrl = 'http://localhost:8080/perfume/';
const casaUrl = 'http://localhost:8080/casa/';
const searchUrl = 'http://localhost:8080/search/';

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



  getPerfumesById(productId: number): Observable<Product> {
    return this.http.get<Product>(perfumeUrl+productId)
  }

  getPerfumesOrderByIdAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'id-asc/?params='+startAt+','+productsPerQuery);
  }

  getPerfumesOrderByIdDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'id-desc/?params='+startAt+','+productsPerQuery);
  }

  getPerfumesOrderByNameAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'name-asc/?params='+startAt+','+productsPerQuery);
  }

  getPerfumesOrderByNameDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'name-desc/?params='+startAt+','+productsPerQuery);
  }

  getPerfumesOrderByPriceAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'price-asc/?params='+startAt+','+productsPerQuery);
  }

  getPerfumesOrderByPriceDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'price-desc/?params='+startAt+','+productsPerQuery);
  }

  doPerfumeSearch(queryParam: string): Observable<Product[]> {
    return this.http.get<Product[]>(perfumeUrl+'search/?params='+queryParam);
  }




  getCasaById(productId: number): Observable<Product> {
    return this.http.get<Product>(casaUrl+productId);
  }

  getCasaOrderByIdAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'id-asc/?params='+startAt+','+productsPerQuery);
  }

  getCasaOrderByIdDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'id-desc/?params='+startAt+','+productsPerQuery);
  }

  getCasaOrderByNameAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'name-asc/?params='+startAt+','+productsPerQuery);
  }

  getCasaOrderByNameDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'name-desc/?params='+startAt+','+productsPerQuery);
  }

  getCasaOrderByPriceAsc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'price-asc/?params='+startAt+','+productsPerQuery);
  }

  getCasaOrderByPriceDesc(startAt: number, productsPerQuery: number): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'price-desc/?params='+startAt+','+productsPerQuery);
  }

  doCasaSearch(queryParam: string): Observable<Product[]> {
    return this.http.get<Product[]>(casaUrl+'search/?params='+queryParam);
  }

  doSearch(queryParam: string): Observable<Product[]> {
    return this.http.get<Product[]>(searchUrl+'?params='+queryParam);
  }
}
