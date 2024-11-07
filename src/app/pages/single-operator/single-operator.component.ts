import { Component, OnInit } from '@angular/core';
import { of, single } from 'rxjs';

@Component({
  selector: 'app-single-operator',
  templateUrl: './single-operator.component.html',
  styleUrl: './single-operator.component.css'
})
export class SingleOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2).pipe(single((value) => value % 2 === 0)).subscribe(
      (data) =>{
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
