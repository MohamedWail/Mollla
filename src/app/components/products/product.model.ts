export class ProductModel {
  public title: string;
  public description: string;
  public image: string;
  public price:number;
  public category:string;
  public id:number;
  public wishlisted:boolean;
  public qty:number=1;



  constructor(title:string,description:string,image:string,price:number,cate:string,id:number,wishlist:boolean,qty:number) {
    this.title=title;
    this.description=description;
    this.image=image;
    this.price=price;
    this.category=cate;
    this.id=id;
    this.wishlisted=wishlist;
    this.qty=qty;

  }
}

