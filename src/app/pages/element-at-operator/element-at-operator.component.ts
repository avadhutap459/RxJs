import { Component, OnInit } from '@angular/core';
import { elementAt, of } from 'rxjs';

@Component({
  selector: 'app-element-at-operator',
  templateUrl: './element-at-operator.component.html',
  styleUrl: './element-at-operator.component.css'
})
export class ElementAtOperatorComponent implements OnInit {

  ngOnInit(): void {

    of(1,2,3,4,5).pipe(elementAt(3)).subscribe((data)=>{
      console.log(data)
    });
    
  }
}
