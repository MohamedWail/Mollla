import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductModel} from "../products/product.model";
import {ProductService} from "../products/product.service";
import {Subscription} from "rxjs";
import {CartService} from "../shopping-cart/cart.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit,OnDestroy {
SingleProduct:ProductModel;
id:number;
// @ViewChild("q",{static:true}) q;
subscribtion:Subscription;
  constructor(private route:ActivatedRoute,private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
   this.subscribtion= this.route.params.subscribe((params:Params)=>{
      this.id= +params['id'];
      this.SingleProduct=this.productService.getSingleProduct(this.id);
    });


  }
  add(qt:HTMLInputElement){
    console.log(( < HTMLInputElement > qt).value)
    this.cartService.addSinglefromProduct(this.id,+( < HTMLInputElement > qt).value)
  }
ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
}
}
