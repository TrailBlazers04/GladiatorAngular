import { Component, OnInit } from '@angular/core';
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

  constructor(private _service : QuizserviceService) { }

  ngOnInit() {
  }

  fetchQuestion() {
    this._service.fetchQuizListByTopicFromRemote(this.top).subscribe(
      data => {
        this.list = data;
        console.log("response recieved");
      },
      error => console.log("exception occured")
    );
  }



}
