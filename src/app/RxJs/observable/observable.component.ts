import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {

  lstStr: any = [];
  constructor(){
        let obs = new Observable<any>(observer=>{
          observer.next(Math.random());
      })
      
      obs.subscribe(res=>{
        this.lstStr.push(res)
        //console.log('subscription a :', res); //subscription a :0.2859800202682865
      });
      
      obs.subscribe(res=>{
        this.lstStr.push(res)
        //console.log('subscription b :', res); //subscription b :0.694302021731573
      });
  }
  ngOnInit(): void {
    
  }
}
