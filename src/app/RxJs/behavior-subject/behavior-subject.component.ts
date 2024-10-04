import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent implements OnInit {

  lstStr: any = [];
  constructor(){
    var behaviorSubject = new BehaviorSubject<number>(123)

    behaviorSubject.subscribe(ele => {
      this.lstStr.push(ele)
      //console.log(`first subscriber ${ele}`)
    })

    behaviorSubject.next(456)

    behaviorSubject.subscribe(ele => {
      this.lstStr.push(ele)
      //console.log(`second subscriber ${ele}`)
    })
  }
  ngOnInit(): void {
    
  }
}
