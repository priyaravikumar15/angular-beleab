import { Routes} from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const approutes:Routes =[

  { path:'' , redirectTo:'/home', pathMatch :'full'},
  { path:'home' , component:HomeComponent},
 /* { path:'Shop' ,component:ShopComponent, children:[
    { path:'allproducts',component:AllproductsComponent,children:[{path:'productadd',component:ProductaddComponent}]},
    { path:'books',component:BooksComponent },
    { path:'computers',component:ComputersComponent},
    { path:'dress',component:DressComponent},
    { path:'foods',component:FoodsComponent},
  ]},
  { path:'Login',component:LoginComponent,canActivate:[ShopComponent]},*/
//{ path:'checkout',component:CheckoutComponent },
 // { path:'shopcatgory/category',loadChildren:'./app/shopcatgory/catgory/CategoryComponent'}
]

export const routing = RouterModule.forRoot(approutes);