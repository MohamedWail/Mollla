import {ProductModel} from "../products/product.model";
import {Injectable} from "@angular/core";
import {ProductService} from "../products/product.service";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class WishlistService {
  wishlistChanged=new BehaviorSubject<ProductModel[]>([]);
  wishlist:ProductModel[]=[];
  constructor(private ProductService:ProductService) {
  }

  addWishlist(index:number){
    const  indexer = this.wishlist.findIndex(x => x.id === this.ProductService.products[index].id);
    if (indexer !=-1){
      console.log(indexer)

      this.wishlist.splice(indexer,1);
      this.wishlistChanged.next(this.wishlist);
      this.ProductService.products[index].wishlisted=false;
      this.ProductService.productChanged.next(this.ProductService.products);
    }else {
      this.ProductService.products[index].wishlisted=true;
    this.ProductService.productChanged.next(this.ProductService.products);
    this.wishlist.push(this.ProductService.products[index]);

    this.wishlistChanged.next(this.wishlist);
}
  }

  deleteWishlist(index:number){
    console.log(index);

    const  indexers = this.wishlist[index].id;
    console.log(this.ProductService.products[indexers]);
    this.wishlist.splice(index,1);
    this.ProductService.products[indexers].wishlisted=false;
    this.ProductService.productChanged.next(this.ProductService.products);

    this.wishlistChanged.next(this.wishlist);
    console.log(this.wishlist);
    console.log(this.ProductService.products[indexers].wishlisted)
  }


}
