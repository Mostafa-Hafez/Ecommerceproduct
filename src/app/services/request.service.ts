import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpclient:HttpClient) { 
  }
    getproductlist(): Observable<any> {
    return this.httpclient.get("https://dummyjson.com/products", {
      
    });
  }
  getproductDetails (id: string) : Observable<any> {
    return this.httpclient.get(`https://dummyjson.com/products/${id}`)
  }

  
}
