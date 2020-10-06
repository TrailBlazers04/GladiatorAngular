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

  list : Quizquestion[] = [];

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
