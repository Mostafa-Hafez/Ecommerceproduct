import { Component,inject,Input,input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../productcard/productcard.component';
import { Iproduct } from '../../Types/iproduct';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls:[ './products.component.css']
})
export class ProductsComponent {
  products!: Array<Iproduct>;
  productrequest = inject(RequestService);

  ngOnInit() {
    this.productrequest
      .getproductlist()
      .subscribe((response) => this.products = response.products);
  }

  receivedFormChild(id: number) {

    this.products = this.products.filter((p :Iproduct) => p.id !== id);
  }
 
 

  
}