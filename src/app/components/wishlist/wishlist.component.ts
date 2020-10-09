import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../products/product.model";
import {WishlistService} from "./wishlist.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit , OnDestroy{
wishlist:ProductModel[]=[];
subscribtion:Subscription;
  constructor(private wishlistService:WishlistService) { }

  ngOnInit(): void {

    this.subscribtion=this.wishlistService.wishlistChanged.subscribe(wish=>{
      this.wishlist=wish;
      console.log(this.wishlist)
    })
  }
  onDelete(index){
    this.wishlistService.deleteWishlist(index);
  }
ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
}
}
