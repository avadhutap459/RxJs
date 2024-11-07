import { Component, OnInit } from '@angular/core';
import { interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to-operator',
  templateUrl: './map-to-operator.component.html',
  styleUrl: './map-to-operator.component.css'
})
export class MapToOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(500).pipe(mapTo('Avadhut')).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
