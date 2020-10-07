import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionClass } from '../questionclass';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  top : string = "";
  topics = [ "JAVA", "SQL", "JQUERY"];

  quizlist : QuestionClass[] = [];

  j : number = 4;

  i: number = 0;

  constructor(private _service : QuizserviceService, private _router : Router) { }

  ngOnInit() {
  }

  fetchQuestion() {
	this._service.fetchNewQuizQuestionByTopicFromRemote(this.top).subscribe(
		data => {
			this.quizlist = data;
		}
	)
  }

  onClickNext() {
	this.i++;
  }

  startTimer() {
	  this._service.timer = setInterval( () => {
		  this._service.seconds++;
	  }, 1000);
  }

  answer(qid,choice) {

  }

 /*  next() {   
		++this.i;
		this.question = this.quizlist[this.i].question;
		this.option = this.quizlist[this.i].options;
  }
  previous() {
		--this.i;
		this.question = this.quizlist[this.i].question;
		this.option = this.quizlist[this.i].options;
  } */

}
