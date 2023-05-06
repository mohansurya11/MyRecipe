import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http: HttpClient) {}

  addProduct(data: any): Observable<any> {
    return this.http.post('http://localhost:4500/products', data);
  }


  getProductList(): Observable<any> {
    return this.http.get('http://localhost:4500/products');
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:4500/products/${id}`, data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4500/products/${id}`);
  }

}
