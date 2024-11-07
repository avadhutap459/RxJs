import { Component, OnInit } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrl: './first-operator.component.css'
})
export class FirstOperatorComponent implements OnInit {

  ngOnInit(): void {
    
    of(1,2,3,4,5).pipe(first()).subscribe((data)=>{
      console.log(data)
    },
  error =>{
    console.log(error)
  })
  }
}
