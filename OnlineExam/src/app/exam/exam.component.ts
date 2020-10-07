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

  quizlist : QuestionClass[] = [];

  j : number = 4;

  i: number = 0;

  opt : any[];

  selectedanswer : string = '';

  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;

  constructor(private _service : QuizserviceService, private _router : Router) { 
      this.radioSelected = "item_3";
      this.getSelecteditem();
  }

  getSelecteditem(){
    
    this.radioSelectedString = JSON.stringify(this.radioSelected);
  }

  onItemChange(opt){
    this.getSelecteditem();
  }

  ngOnInit() {
  }

  fetchQuestion() {
	  this._service.fetchNewQuizQuestionByTopicFromRemote(this.top).subscribe(
		  data => {
        this.quizlist = data;
        this.opt = this.quizlist[this.i].options;
		  }
    );

    
  }

  onClickNext() {
    this.i++;
    this.opt = this.quizlist[this.i].options;
  }
  onClickPrev(){
    this.i--;
  }

  startTimer() {
	  this._service.timer = setInterval( () => {
		  this._service.seconds++;
	  }, 1000);
  }

  answer(qid,choice) {

  }

}
