import { Component, OnInit } from '@angular/core';
import { of, skip } from 'rxjs';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrl: './skip-operator.component.css'
})
export class SkipOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4,5).pipe(skip(2)).subscribe((data)=>{
      console.log(data)
    })
  }
}
