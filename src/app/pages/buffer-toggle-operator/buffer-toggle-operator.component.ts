import { Component, OnInit } from '@angular/core';
import { bufferToggle, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle-operator',
  templateUrl: './buffer-toggle-operator.component.html',
  styleUrl: './buffer-toggle-operator.component.css'
})
export class BufferToggleOperatorComponent implements OnInit {

  ngOnInit(): void {
    let opening = interval(600).pipe(tap(()=>console.log('open')));
    let closing = () => interval(300).pipe(tap(()=>console.log('close')));

    interval(1000).
    pipe(
      tap((data)=>console.log(data)),
      bufferToggle(opening,closing),
      take(3)
    ).subscribe((data)=>console.log(data));
  }
}
