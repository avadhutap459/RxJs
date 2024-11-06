import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

  userName : string = '';

  @Output() userAdded = new EventEmitter<string>()
  constructor(){

  }

  ngOnInit(): void {
    
  }

  onUserAdd(){
    this.userAdded.emit(this.userName);
  }
}
