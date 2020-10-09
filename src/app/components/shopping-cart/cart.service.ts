import {Injectable} from "@angular/core";
import {ProductModel} from "../products/product.model";
import {ProductService} from "../products/product.service";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class CartService {
  constructor(private productService:ProductService) {
  }
  shoppingCart:ProductModel[]=[];
  shoppingCartChanged=new BehaviorSubject<ProductModel[]>([]);
Total:number;
totalChanged= new BehaviorSubject<number>(0);
  addtoCart(index){
  const  indexer = this.shoppingCart.findIndex(x => x.id === index+1);
    if(indexer!=-1){
      this.shoppingCart[indexer].qty+=1;
      this.shoppingCartChanged.next(this.shoppingCart);

    }else {
      this.productService.getSingleProduct(index).qty=1
      this.shoppingCart.push(this.productService.getSingleProduct(index));
      this.shoppingCartChanged.next(this.shoppingCart);
    }
    this.GetTotal()

  }

  addSinglefromProduct(index,qutat){
    const  indexer = this.shoppingCart.findIndex(x => x.id === index+1);
    if(indexer!=-1){
      this.shoppingCart[indexer].qty=this.shoppingCart[indexer].qty+qutat;
      this.shoppingCartChanged.next(this.shoppingCart);
    }else {
      this.shoppingCart.push(this.productService.getSingleProduct(index));
      this.shoppingCart[index].qty=qutat;
      this.shoppingCartChanged.next(this.shoppingCart);
    }
    this.GetTotal()

  }
  deleteItem(id){
    this.shoppingCart.splice(id,1);
    console.log(this.shoppingCart);
    this.shoppingCartChanged.next(this.shoppingCart);
    this.GetTotal()

  }
changeQtty(newQty,index){
    console.log(newQty);
    this.shoppingCart[index].qty=newQty;
  this.shoppingCartChanged.next(this.shoppingCart);
this.GetTotal()
}
GetTotal(){
    this.Total=0;
    for(let p of this.shoppingCart){
      this.Total +=p.qty*p.price;
    }

    this.totalChanged.next(Math.round(this.Total * 100) / 100);
}
}
