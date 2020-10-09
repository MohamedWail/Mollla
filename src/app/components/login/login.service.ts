import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, Subject, throwError} from "rxjs";
import {UserModel} from "./user.model";
interface AuthResponseData {
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;

}
@Injectable({providedIn:"root"})
export class LoginService {
  isLogged=new BehaviorSubject<boolean>(false);
  user=new BehaviorSubject<UserModel>(null);
  private expireTimer:any;
  constructor(private http:HttpClient) {
  }
login(email:string,password:string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsVP55ifPl86v-eFQVivQxDAIOs1V5vVo',
      {
        email:email,
        password:password,
        returnSecureToken:true

      }
      ).pipe(
        catchError(errorRes=>{
          let errorMessage='An Unknown Error';
          if (!errorRes.error||!errorRes.error.error){
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case "EMAIL_NOT_FOUND":
              errorMessage="Email Not Found";
              break;
            case "INVALID_PASSWORD":
              errorMessage="Incorrect Email or Password ";
              break;
            case "USER_DISABLED":
              errorMessage="User is Disabeled";
              break;


          }
          return throwError(errorMessage);

        })
      ,tap( resData=>{
        const expirationDate=new Date(new Date().getTime()+ +resData.expiresIn *1000)
        const user =new UserModel(resData.email,resData.localId,resData.idToken,expirationDate);
        this.user.next(user);
        this.autoLogout(+resData.expiresIn *1000);
        this.isLogged.next(true);
        localStorage.setItem('userData',JSON.stringify(user));
      })
    )


}
autoLogin(){
    const userData:{
       email:string,
       id:string,
      _token:string,
       _tokenEpirationDate:string
    } = JSON.parse(localStorage.getItem('userData')) ;

    if(!userData){
      return;
    }
   const LoadUser=new UserModel(
     userData.email,
     userData.id,
     userData._token,
     new Date(userData._tokenEpirationDate)
   );

    if(LoadUser.token){

      this.user.next(LoadUser);
      const ExpireDown=new Date(userData._tokenEpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(ExpireDown);
      this.isLogged.next(true);
    }
}

  register(email:string,password:string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsVP55ifPl86v-eFQVivQxDAIOs1V5vVo',
      {
        email:email,
        password:password,
        returnSecureToken:true

      }
    ).pipe(
      catchError(errorRes=>{
        let errorMessage='An Unknown Error';
        if (!errorRes.error||!errorRes.error.error){
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
          case "EMAIL_EXISTS":
            errorMessage="Email Already Exist";
            break;
          case "OPERATION_NOT_ALLOWED":
            errorMessage="Password sign-in is disabled for this project";
            break;
          case "TOO_MANY_ATTEMPTS_TRY_LATER":
            errorMessage="Try again later.";
            break;


        }
        return throwError(errorMessage);

      })
      ,tap( resData=>{
        const expirationDate=new Date(new Date().getTime()+ +resData.expiresIn *1000)
        const user =new UserModel(resData.email,resData.localId,resData.idToken,expirationDate);
        this.user.next(user);
        this.autoLogout(+resData.expiresIn *1000);
        this.isLogged.next(true);
        localStorage.setItem('userData',JSON.stringify(user));
      })
    )


}
logOut(){
  this.user.next(null);
  this.isLogged.next(false);
  localStorage.removeItem("userData");
  if(this.expireTimer){
    clearTimeout(this.expireTimer);
  }
  this.expireTimer=null;
}
  autoLogout(expirationDuration:number){
    this.expireTimer=setTimeout(()=>{
      this.logOut()
    },expirationDuration);

  }
isAuthenticate(){
    const promise=new Promise(
      (resolve, reject) => {
        this.isLogged.subscribe(log=>{
          resolve(log);
        });
      });

  return promise;
}
}
