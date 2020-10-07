import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionClass } from '../questionclass';
import { Quizquestion } from '../quizquestion';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  top : string = "";
  topics = [ "JAVA", "SQL", "JQUERY"];

  quizlist : Quizquestion[] = [
  ];

  

  j : number = 4;

  i: number = 0;
 hide:boolean=false;
  constructor(private _service : QuizserviceService, private _router : Router) { }

  ngOnInit() {
  }

  fetchQuestion() {
	this._service.fetchNewQuizQuestionByTopicFromRemote(this.top).subscribe(
		data => {
			this.quizlist = data;
		}
  )
  this.hide=true;
  }

  onClickNext() {
	this.i++;
  }
  onClickPrev(){
    this.i--;
  }

  startTimer() {
	  this._service.timer = setInterval( () => {
		  this._service.seconds++;
	  }, 1000);
  }


}
