import { Component, OnInit } from '@angular/core';

import { ignoreElements, of, take } from 'rxjs';

@Component({
  selector: 'app-ignore-element-operator',
  templateUrl: './ignore-element-operator.component.html',
  styleUrl: './ignore-element-operator.component.css'
})
export class IgnoreElementOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4,5).pipe(take(3), ignoreElements()).subscribe((data)=>{
      console.log(data)
    },
  (error)=>{
    console.log(error);
  },
  () =>{
    console.log('complete')
  }
)
  }
}
