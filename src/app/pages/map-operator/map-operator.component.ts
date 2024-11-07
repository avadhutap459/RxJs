import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.css'
})
export class MapOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1,2,3,4).pipe(map((value) =>{
      return value * 10;
    })).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error)
      },
      () =>{
        console.log('complete')
      }
    )
  }
}
