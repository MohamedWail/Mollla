import {ProductModel} from "./product.model";
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class ProductService {
  products:ProductModel[];
  productChanged=new BehaviorSubject<ProductModel[]>([]);
  constructor(private http:HttpClient) {
  }
  getProducts(){
    this.http.get<ProductModel[]>("https://fakestoreapi.com/products").subscribe(resp=>{
      this.setProduct(resp);
      console.log(resp);

    })
  }
  setProduct(product:ProductModel[]){
    this.products=product;
    this.productChanged.next(this.products);
  }
  getSingleProduct(id:number){
    return this.products[id];
  }


}
