import { Component, OnInit, Input } from '@angular/core';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-examstart',
  templateUrl: './examstart.component.html',
  styleUrls: ['./examstart.component.css']
})
export class ExamstartComponent implements OnInit {

  @Input() top : string;

  constructor(private _service : QuizserviceService) { }

  ngOnInit() {
    
    this._service.fetchNewQuizQuestionByTopicFromRemote(this.top).subscribe(
      data => {
        console.log("response recieved");
      },
      error => console.log("exception occured")
    ); 
  }

}
