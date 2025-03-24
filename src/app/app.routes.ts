import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { authGuardGuard } from './auth-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        title: 'Products'
    },
    {
        path: 'product-details/:id',
        component: ProductdetailsComponent,
        title: 'Product Details'
    },
    {
        path: 'addproduct',
        component: AddproductComponent,
        title: 'Add Product',
        canActivate: [authGuardGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title   : 'Login'
    },{
        path: 'register',
        component: RegisterComponent,
        title   : 'Register'
    },
    {
        path: 'Cart/:id',
        component: CartComponent,
    }
    ,{
        path: '**',
        component:NotFoundComponent
    }
];

