import { Component, OnInit } from '@angular/core';
import { last, of } from 'rxjs';

@Component({
  selector: 'app-last-operator',
  templateUrl: './last-operator.component.html',
  styleUrl: './last-operator.component.css'
})
export class LastOperatorComponent implements OnInit {


  ngOnInit(): void {
    of(1,2,3,4,5).pipe(last()).subscribe((data)=>{
      console.log(data)
    })
  }
}
