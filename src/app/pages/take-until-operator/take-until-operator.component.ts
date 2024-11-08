import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrl: './take-until-operator.component.css'
})
export class TakeUntilOperatorComponent implements OnInit,AfterViewInit {

  buttonEvent!: Observable<Event>;

  constructor(){}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('takeUntil')!,'click')
  }
  startTimer(){
    interval(500).pipe(takeUntil(this.buttonEvent)).subscribe((data)=>{
      console.log(data);
    },
    (error) =>{
      console.log(error);
    },
    () =>{
      console.log('complete')
    }
  )
  }
}
