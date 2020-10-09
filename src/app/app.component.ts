import {Component, OnInit} from '@angular/core';
import {ProductService} from "./components/products/product.service";
import {LoginService} from "./components/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private productService:ProductService,private loginService:LoginService) {
  }
  
  ngOnInit(): void {
    this.productService.getProducts();
    this.loginService.autoLogin();
  }

  title = 'angpro';
}
