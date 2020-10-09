import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {CurrService} from "./curr.service";
import {CartService} from "../../shopping-cart/cart.service";
import {ProductModel} from "../../products/product.model";
import {Subscription} from "rxjs";
import {LoginService} from "../../login/login.service";
import {WishlistService} from "../../wishlist/wishlist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{

  constructor(private router:Router,private currService:CurrService,private cartService:CartService,private loginService:LoginService,private wishlistService:WishlistService) { }
cart:ProductModel[];
  Total:number;
  qty:number[]=[];
  sub:Subscription;
  isLogged:boolean;
  wishlistList:ProductModel[];
  ngOnInit(): void {
    this.sub=this.cartService.shoppingCartChanged.subscribe(cartt=>{
      this.cart=cartt;
      this.qty=[];
      for (let p of cartt){
        this.qty.push(p.qty);
      }
      console.log(this.qty)
    });
    this.cartService.totalChanged.subscribe(tt=>{
      this.Total=tt;
    })
    this.sub=this.loginService.user.subscribe(data=>{
      this.isLogged= !data?false:true;
    });
    this.sub=this.wishlistService.wishlistChanged.subscribe(wish=>{
      this.wishlistList=wish;
    })
  }
  euro(){
    this.currService.euro();

  }
  loggedOut(){
    this.loginService.logOut();
    this.router.navigate(['/'])
  }
  usd(){
    this.currService.dollar();
  }
  deleteProduct(index:number){
    this.cartService.deleteItem(index);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
