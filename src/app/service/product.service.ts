import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // getproduct(_limit = 8, seach_key: any = null): Observable<any> {
  //   let url = 'http://localhost:3000/product/?_limit=8&_sort=id&_order=desc';
  //   if (seach_key != null) {
  //     url += '&name_like=' + seach_key;
  //   }
  //   return this.http.get<any>(url);
  // }
  getproduct(_limit = 8, seach_key: any = null): Observable<any> {
    let url = 'http://localhost:3000/product';
    return this.http.get<any>(url);
  }
  deleted(id: number): Observable<any> {
    return this.http.delete<any>(environment.baseURL  + id);
  }
  add(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/product/', data);
  }
  update(id: Number, data: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/product/' + id, data);
  }

  getID(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/product?id='+ id);
  }
}
