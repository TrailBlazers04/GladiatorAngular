import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Quizquestion } from '../quizquestion';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-setquestion',
  templateUrl: './setquestion.component.html',
  styleUrls: ['./setquestion.component.css']
})
export class SetquestionComponent implements OnInit {
  
  quizquestion = new Quizquestion();

  topics = [ "JAVA", "SQL", "JQUERY"];
                 
  constructor( private _service : QuizserviceService, private _router : Router) { }

  ngOnInit() {
  }

  addQuestionOnSubmit() {
    this._service.addQuestionToRemote(this.quizquestion).subscribe(
      data => {
        console.log("response recieved");
      },
      error => {
        console.log("exception occured");
      }
    )
  } 

  

}
