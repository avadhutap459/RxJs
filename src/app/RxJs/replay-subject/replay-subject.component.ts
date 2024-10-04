import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent implements OnInit {

  lstStr: any = [];
  constructor(){
    debugger
    const replaySuject = new ReplaySubject(2) //If we we want to show only last 2 buffered value otherwise it will show all

    replaySuject.next(111)
    replaySuject.next(222)
    replaySuject.next(333)

    replaySuject.subscribe(e => {
      this.lstStr.push(`First Subscriber ${e}`)
      //console.log(`First Subscriber ${e}`)
      //this.first_subscriber_replaySubject.push(e);
    })

    //new values show to existing subsriber
    replaySuject.next(444)

    replaySuject.subscribe(e => {
      this.lstStr.push(`Second Subscriber ${e}`)
      //console.log(`Second Subscriber ${e}`)
      //this.second_subscriber_replaySubject.push(e);
    })

    replaySuject.next(555)

  }
  ngOnInit(): void {
    
  }
}
