import { Component, OnInit } from '@angular/core';
import { combineAll, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrl: './combine-all.component.css'
})
export class CombineAllComponent implements OnInit {

  constructor() {

    const source$ = interval(1000).pipe(take(2));

    const example$ = source$.pipe(map(val =>interval(1000).pipe(take(5))));

    example$.pipe(combineAll()).subscribe(console.log);

  }

  ngOnInit(): void {

  }
}
