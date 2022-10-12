import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const productUrl = 'http://localhost:8080/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(productUrl+productId)
  }
}
