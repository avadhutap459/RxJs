import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-newobservable',
  templateUrl: './newobservable.component.html',
  styleUrl: './newobservable.component.css'
})
export class NewobservableComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) =>{
      for(let i=0;i<5;i++){
        observer.next(i);
      }
      observer.complete()
    });

    let observer ={
      next:(data:number)=>console.log(data),
      error:(error:string)=>console.log(error),
      complete:() =>console.log('complete all done')
    };

    newObservable.subscribe(observer);
  }
}
