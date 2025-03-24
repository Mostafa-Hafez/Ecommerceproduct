import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardserviceService } from '../services/cardservice.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   counter :number=0;
  cartcounterservice=inject(CardserviceService);

  ngOnInit(){
    this.cartcounterservice.getCounter.subscribe((data)=>{
      this.counter=data;
    });
    
  }
}
