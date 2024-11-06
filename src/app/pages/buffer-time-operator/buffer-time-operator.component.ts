import { Component, OnInit } from '@angular/core';
import { bufferTime, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-time-operator',
  templateUrl: './buffer-time-operator.component.html',
  styleUrl: './buffer-time-operator.component.css'
})
export class BufferTimeOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(bufferTime(2000)).subscribe((data)=>{
      console.log(data)
    })
  }
}