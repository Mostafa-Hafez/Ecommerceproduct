import { Component, inject, Input } from '@angular/core';
import { Iproduct } from '../../Types/iproduct';
import { RequestService } from '../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  //@Input() id: string = "";
  router = inject(Router);
  productitem!: any;
  activatedRoute = inject(ActivatedRoute);

  requestproduct = inject(RequestService);


  ngOnInit() {
    const params_id: string = this.activatedRoute.snapshot.params['id'];
    this.requestproduct
      .getproductDetails(params_id)
      .subscribe((response) => this.productitem = response );
  }

  handleAddToCart(){
    let result= confirm('Are You Sure You Want To Add This Product To Cart?');
    if(result==true){
     this.router.navigate(['/Cart',this.productitem().id])
      
    }

  }
}
