import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {WishlistComponent} from "./components/wishlist/wishlist.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {LoginComponent} from "./components/login/login.component";
import {SingleProductComponent} from "./components/single-product/single-product.component";
import {Grid4ViewComponent} from "./components/products/view/grid4-view/grid4-view.component";
import {Grid3ViewComponent} from "./components/products/view/grid3-view/grid3-view.component";
import {Grid2ViewComponent} from "./components/products/view/grid2-view/grid2-view.component";
import {ListViewComponent} from "./components/products/view/list-view/list-view.component";
import {MyAccountComponent} from "./components/my-account/my-account.component";
import {AuthguardService} from "./components/login/authguard.service";



const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
      {path: '', component: Grid4ViewComponent},
      {path: 'grid3', component: Grid3ViewComponent},
      {path: 'grid2', component: Grid2ViewComponent},
      {path: 'list', component: ListViewComponent},

    ]},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'shoppingcart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products/:id', component: SingleProductComponent},
  { path: 'account', component: MyAccountComponent, canActivate:[AuthguardService]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
