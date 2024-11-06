import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when-operator',
  templateUrl: './buffer-when-operator.component.html',
  styleUrl: './buffer-when-operator.component.css'
})
export class BufferWhenOperatorComponent implements OnInit {

  ngOnInit(): void {
    let x = 0;
    interval(500)
    .pipe(
      tap((i)=> x = i),
      bufferWhen(() => {
        if(x >5 ){
          return interval(1000)
        }
        return interval(2000)
      })
    ).subscribe((data)=>{
      console.log(data);
    })
  }
}
