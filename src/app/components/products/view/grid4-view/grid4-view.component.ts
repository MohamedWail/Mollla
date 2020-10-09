import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../product.model";
import {ProductService} from "../../product.service";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {WishlistService} from "../../../wishlist/wishlist.service";
import {CartService} from "../../../shopping-cart/cart.service";

@Component({
  selector: 'app-grid4-view',
  templateUrl: './grid4-view.component.html',
  styleUrls: ['./grid4-view.component.css']
})
export class Grid4ViewComponent implements OnInit,OnDestroy {

  asd:ProductModel[];
  sub:Subscription
  constructor(private productService:ProductService,private http:HttpClient,private wishlistService:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.sub=this.productService.productChanged.subscribe(prod=>{
      this.asd=prod;
    })
  }

  addWishlistItem(index){
    this.wishlistService.addWishlist(index);

  }
  addtoCart(index){

    this.cartService.addtoCart(index);

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
