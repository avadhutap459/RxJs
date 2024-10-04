import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

    lstStr: any = [];

    constructor(){
      let obs = new Subject();
      
      obs.subscribe(res=>{
        this.lstStr.push(res)
       // console.log('subscription a :', res); // subscription a : 0.91767565496093
      });
  
      obs.subscribe(res=>{
        this.lstStr.push(res)
        //console.log('subscription b :', res);// subscription b : 0.91767565496093
      });
  
      obs.next(Math.random());

    }

    ngOnInit(): void {
      
    }

    
}
