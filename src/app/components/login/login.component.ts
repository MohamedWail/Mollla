import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errorMessage:string;
isLoading:boolean=false;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm){
    this.isLoading=true;
    const email=loginForm.value.email;
    const password=loginForm.value.password;
    this.loginService.login(email,password).subscribe(resdata=>{
      console.log(resdata);
        this.isLoading=false;
        this.router.navigate(['/']);
    },
      error => {
      this.errorMessage=error;
        this.isLoading=false;
      })
  }
  onRegSubmit(RegisterForm:NgForm){
    this.isLoading=true;
    const email=RegisterForm.value.register_email;
    const password=RegisterForm.value.register_password
    this.loginService.register(email,password).subscribe(respData=>{
      console.log(respData);
        this.isLoading=false;
        this.router.navigate(['/']);
    },
      error => {
      this.errorMessage=error;
        this.isLoading=false;
      })

  }
}
