import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.css'
})
export class OfComponent implements OnInit {

  constructor() {
    of(10, 20, 30).subscribe({
      next: value => console.log('next:', value),
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),
    });

  }
  ngOnInit(): void {

  }
}
