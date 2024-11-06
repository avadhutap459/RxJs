import { Component, OnInit } from '@angular/core';
import { bufferCount, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-count-operator',
  templateUrl: './buffer-count-operator.component.html',
  styleUrl: './buffer-count-operator.component.css'
})
export class BufferCountOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(bufferCount(3)).subscribe((data)=>{
      console.log(data)
    })
  }
}
