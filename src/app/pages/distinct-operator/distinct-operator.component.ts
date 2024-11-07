import { Component, OnInit } from '@angular/core';
import { distinct, of } from 'rxjs';

@Component({
  selector: 'app-distinct-operator',
  templateUrl: './distinct-operator.component.html',
  styleUrl: './distinct-operator.component.css'
})
export class DistinctOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4,5,1,2,3,4).pipe(distinct()).subscribe((data)=>{
      console.log(data);
    })
  }
}
