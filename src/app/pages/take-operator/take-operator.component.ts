import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrl: './take-operator.component.css'
})
export class TakeOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(
      take(5)
    ).subscribe((data)=>{
      console.log(data)
    })
  }
}
