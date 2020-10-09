import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../product.model";
import {ProductService} from "../../product.service";
import {HttpClient} from "@angular/common/http";
import {WishlistService} from "../../../wishlist/wishlist.service";
import {CartService} from "../../../shopping-cart/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit,OnDestroy {

  asd:ProductModel[];
  sub:Subscription;
  p: number = 1;
  collection: any[] = this.asd;
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
