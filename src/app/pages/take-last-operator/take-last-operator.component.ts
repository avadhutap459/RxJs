import { Component, OnInit } from '@angular/core';
import { interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrl: './take-last-operator.component.css'
})
export class TakeLastOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(500).pipe(take(10),takeLast(5)).subscribe((data)=>{
      console.log(data)
    })
  }
}
