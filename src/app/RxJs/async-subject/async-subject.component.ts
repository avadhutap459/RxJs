import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent implements OnInit {

  lstStr: any = [];

  constructor(){
      //---------------Async subject sends the latest value to subscribers when it's completed-----------
      const asyncSubject = new AsyncSubject<number>();

      asyncSubject.subscribe(e => {
        this.lstStr.push(`First Subscriber ${e}`);
      });

      asyncSubject.next(111);
      asyncSubject.next(222);
      asyncSubject.next(333);
      asyncSubject.next(444);

      asyncSubject.subscribe(e => {
        this.lstStr.push(`Second Subscriber ${e}`);
      });

      asyncSubject.next(555);
      asyncSubject.complete();

      //--------------------------------------------------------------------------
  }

  ngOnInit(): void {
    
  }
}
