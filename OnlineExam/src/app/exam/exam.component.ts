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

<<<<<<< HEAD
  quizlist : QuestionClass[] = [];
=======
  list : Quizquestion[] = [
  ];

  allQuestions: any = [{
		"id": 1,
		"question": "What is the capital of Belgium?",
		"a": "Vienna",
		"b": "Berlin",
		"c": "Brussels",
		"d": "Prague",
		"answer": "c"
	},
	{
		"id": 2,
		"question": "What is the capital of Australia?",
		"a": "Vienna",
		"b": "Canberra",
		"c": "Brussels",
		"d": "Prague",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "What is the capital of Bulgaria?",
		"a": "Vienna",
		"b": "Sofia",
		"c": "Brussels",
		"d": "Prague",
		"answer": "b"
	}
	];
>>>>>>> 8ccda8b5d61388fc47973a5d2b70e28b16f76ad4

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

<<<<<<< HEAD
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
=======

>>>>>>> 8ccda8b5d61388fc47973a5d2b70e28b16f76ad4

}
