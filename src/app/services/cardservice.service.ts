import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproduct } from '../../Types/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
 private counter= new BehaviorSubject<number>(0);
  arr :Iproduct[] = [];
 addtocard(id:number){

  for(let i=0;i<this.arr.length;i++){}
 }
 getCounter = this.counter.asObservable();
 setCounter(value: number){
   this.counter.next(value);
 
  }
 
  constructor() { }

  addToCart(product: Iproduct) {
    this.arr.push(product);
    localStorage.setItem('cart', JSON.stringify(this.arr)); // Persist cart in localStorage
    this.setCounter(this.arr.length); // Update the counter
  }
}
