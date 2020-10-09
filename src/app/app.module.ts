import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {AppRoutingModule} from "./app-routing-module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ShortenPipe} from "./components/shared/pipes/shorten.pipe";
import {ArraysortPipe} from "./components/shared/pipes/arraysort.pipe";
import { ListViewComponent } from './components/products/view/list-view/list-view.component';
import { Grid2ViewComponent } from './components/products/view/grid2-view/grid2-view.component';
import { Grid3ViewComponent } from './components/products/view/grid3-view/grid3-view.component';
import { Grid4ViewComponent } from './components/products/view/grid4-view/grid4-view.component';
import {LoadingComponent} from "./components/shared/loading/loading/loading.component";
import {InterceptorsService} from "./components/login/interceptors.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent,
    LoginComponent,
    ShoppingCartComponent,
    ProductsComponent,
    SingleProductComponent,
    MyAccountComponent,
    WishlistComponent,
    HeaderComponent,
    FooterComponent,
    ShortenPipe,
    ArraysortPipe,
    ListViewComponent,
    Grid2ViewComponent,
    Grid3ViewComponent,
    Grid4ViewComponent,
    LoadingComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
