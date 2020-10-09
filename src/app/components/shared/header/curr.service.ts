import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class CurrService {
  currEditing =new Subject<string>();
  curr="$";

  dollar(){
    this.curr="$";
    console.log(this.curr);
    this.currEditing.next(this.curr);
  }
  euro(){
    this.curr="€";
    console.log(this.curr);
    this.currEditing.next(this.curr);
  }

}
