import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './productcard/productcard.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports:  [ RouterOutlet,ProductsComponent ,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
}
