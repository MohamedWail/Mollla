import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {LoginService} from "./login.service";

@Injectable({providedIn:"root"})
export class AuthguardService implements CanActivate{
  constructor(private loginService:LoginService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
return this.loginService.isAuthenticate().then(
  (athenticated:boolean)=>{
    if (athenticated){
      return true;
    }else{
      this.router.navigate(["/login"]);
    }
  }
)

  }
}
