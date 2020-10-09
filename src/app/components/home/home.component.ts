import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrService} from "../shared/header/curr.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
curren="$";
sub:Subscription;
  constructor(private currService:CurrService) { }

  ngOnInit(): void {
    this.sub=this.currService.currEditing.subscribe(curr=>{
      this.curren=curr;
    });
  }
ngOnDestroy(): void {
    this.sub.unsubscribe();
}
}
