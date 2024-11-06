import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrl: './take-while-operator.component.css'
})
export class TakeWhileOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(takeWhile((x) => x < 5)).subscribe((data) => {
      console.log(data)
    })
  }
}
