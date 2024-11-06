import { Component, OnInit } from '@angular/core';
import { of, skipLast, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html',
  styleUrl: './skip-last-operator.component.css'
})
export class SkipLastOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4,5).pipe(skipLast(2)).subscribe((data)=>{
      console.log(data)
    })
  }
}
