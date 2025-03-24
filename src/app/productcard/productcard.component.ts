import { Component, inject, input,output  } from '@angular/core';
import { Iproduct } from '../../Types/iproduct';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardserviceService } from '../services/cardservice.service';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductCardComponent {
  productitem =input.required<Iproduct>();
 sendToParent= output<number>()
  
  router=inject(Router);
  
  handleDeleteProduct(){
    console.log(this.productitem().id);

    this.sendToParent.emit(this.productitem().id); 
  }
  handleRedirectToDetails(){
    this.router.navigate(['/product-details',this.productitem().id])
  }
  
  handleAddToCart(){
    let result= confirm('Are You Sure You Want To Add This Product To Cart?');
    if(result==true){
     this.router.navigate(['/Cart',this.productitem().id])
      
    }

  }
}
