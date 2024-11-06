import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html',
  styleUrl: './skip-until-operator.component.css'
})
export class SkipUntilOperatorComponent implements OnInit,AfterViewInit {

  buttonEvent!: Observable<Event>;
  numbers : number[] = [];
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('showuntilbutton')!,'click');

    interval(500).pipe(skipUntil(this.buttonEvent)).subscribe((data)=>{
      this.numbers.push(data)
      console.log(data)
    })
  }
}
