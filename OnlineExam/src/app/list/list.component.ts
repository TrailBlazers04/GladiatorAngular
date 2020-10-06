import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student.model';
import { Router } from '@angular/router';
import { QuizserviceService } from '../quizservice.service';
import { Quizquestion } from '../quizquestion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : Quizquestion[] = [];
  constructor(private _router : Router, private _service : QuizserviceService) { }

  ngOnInit() {
    this._service.fetchQuizListFromRemote().subscribe(
      data => {
        this.list = data;
        console.log("response recieved");
      },
      error => console.log("exception occured")
    );
  }
  /* delete(index : number){
    var ans = confirm("are you surre, you want to delete?");
    if(ans){
      this.service.deleteAlbum(index);
    }
    
  } */

  /* goToSetQuestion() {
    this._router.navigate(['setquestion']);
  } */
}
