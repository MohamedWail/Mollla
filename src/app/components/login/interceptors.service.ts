import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";
import {exhaustMap, take} from "rxjs/operators";

@Injectable({providedIn:"root"})
export class InterceptorsService implements HttpInterceptor{
  constructor(private loginService:LoginService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.loginService.user.pipe(
      take(1),
      exhaustMap(user=>{
        if(!user){
          return next.handle(req);
        }
        const modifiedRequest=req.clone({
          params:new HttpParams().set('auth',user.token)
        });
        return next.handle(modifiedRequest);
      })
    )
  }

}
