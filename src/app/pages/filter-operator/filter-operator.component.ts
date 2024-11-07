import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.css'
})
export class FilterOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4,5).pipe(filter((value)=> value > 3)).subscribe((data)=>{
      console.log(data)
    })
  }
}
