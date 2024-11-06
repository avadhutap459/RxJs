import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  encapsulation : ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  userName : string = '';
  usersList : string[] = [];

  constructor(){
  }
  ngOnInit(): void {
    
  }

  onUserAdd(event : string){
    this.usersList.push(event)
  }
}
