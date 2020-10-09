import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../product.model";
import {Subscription} from "rxjs";
import {ProductService} from "../../product.service";
import {HttpClient} from "@angular/common/http";
import {WishlistService} from "../../../wishlist/wishlist.service";
import {CartService} from "../../../shopping-cart/cart.service";

@Component({
  selector: 'app-grid2-view',
  templateUrl: './grid2-view.component.html',
  styleUrls: ['./grid2-view.component.css']
})
export class Grid2ViewComponent implements OnInit ,OnDestroy{

  asd:ProductModel[];
  sub:Subscription;
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
