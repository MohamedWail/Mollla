import {AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ProductModel} from "./product.model";
import {ProductService} from "./product.service";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ArraysortPipe} from "../shared/pipes/arraysort.pipe";
import {createViewChild} from "@angular/compiler/src/core";
import {WishlistService} from "../wishlist/wishlist.service";
import {CartService} from "../shopping-cart/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{
  asd:ProductModel[];
  subscribtion:Subscription;
  defaultProduct:ProductModel[];


  constructor(private productService:ProductService,private http:HttpClient,private wishlistService:WishlistService,private cartService:CartService) { }



  ngOnInit(): void {
    this.subscribtion=this.productService.productChanged.subscribe(productRet=>{
  this.asd=productRet;
});


  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  callType(value){
    const filterPipe = new ArraysortPipe();
    switch (value) {
      case "title":
        this.asd=filterPipe.transform(this.asd,"title");

        break;
      case "priceHigh":
        this.asd=filterPipe.transform(this.asd,"price");

        break;
      case "priceLOw":
        this.asd=filterPipe.transform(this.asd,"price");

        this.asd=this.asd.reverse();

        break;
      case"aqw":
        this.shuffle(this.asd);

        break;


    }
  }

ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
}
}
