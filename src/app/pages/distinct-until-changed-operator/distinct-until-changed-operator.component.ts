import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrl: './distinct-until-changed-operator.component.css'
})
export class DistinctUntilChangedOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4).pipe(distinctUntilChanged((prev,cur)=>{
      return cur === prev+1;
    })).subscribe((data)=>{
      console.log(data);
    })
  }
}
