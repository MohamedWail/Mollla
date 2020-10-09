import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../products/product.service";
import {CartService} from "./cart.service";
import {Subscription} from "rxjs";
import {ProductModel} from "../products/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnDestroy {
  subscribtion:Subscription;
  shoppingCart:ProductModel[]=[];
  qtys:number[]=[];
  Total:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.subscribtion=this.cartService.shoppingCartChanged.subscribe(cart=>{
      this.shoppingCart=cart;
      this.qtys=[];
      for (let p of cart){
        this.qtys.push(p.qty);
      }
    });

    this.subscribtion=this.cartService.totalChanged.subscribe(tt=>{
  this.Total=tt;
})
  }
  onChange(st:HTMLInputElement,index:number){
    // this.changeer=true;
    this.qtys[index]=+( < HTMLInputElement > st).value;
    this.cartService.changeQtty(this.qtys[index],index);
console.log(this.shoppingCart);

  }
  deleteProduct(index:number){
    this.cartService.deleteItem(index);
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }
}
