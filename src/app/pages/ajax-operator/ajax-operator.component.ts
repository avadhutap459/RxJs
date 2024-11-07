import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrl: './ajax-operator.component.css'
})
export class AjaxOperatorComponent implements OnInit {

  ngOnInit(): void {
    /*ajax('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((response) =>{
          let data = [];
          for(let post of response.response){
            data.push(post.title);
          }
          return data;
        })
      )*/
  }
}
