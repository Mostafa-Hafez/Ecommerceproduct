import { Component, inject, NgModule } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../Types/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { CardserviceService } from '../services/cardservice.service';

@Component({
  selector: 'app-cart',
  imports: [FormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  counter=inject(CardserviceService);
  arr :any[] = [];
  pro!:any;
  cnt:number=0;

  activatedRoute = inject(ActivatedRoute);

  requestproduct = inject(RequestService);


  ngOnInit() {
    const params_id: string = this.activatedRoute.snapshot.params['id'];

    this.requestproduct
      .getproductDetails(params_id)
      .subscribe((response) => {
        this.pro = response;
        if (this.pro) {
          this.arr.push(this.pro);
          this.updateCart(); 
        }
      });

    this.counter.getCounter.subscribe((data) => {
      this.cnt = data;
    });
    this.counter.setCounter(this.cnt + 1);
  }

  constructor() { 
     
  }

    
  

  removeFromCart(index: number) {
    this.arr.splice(index, 1);
    this.updateCart();
  }

  addToCart(product: any) {
    this.arr.push(product);
    this.updateCart(); 
    this.counter.setCounter(this.arr.length); 
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.arr));
  }

  getTotalPrice(): number {
    return this.arr.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
    
  }

}
