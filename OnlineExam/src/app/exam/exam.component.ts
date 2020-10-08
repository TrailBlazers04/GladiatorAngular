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

  i: number = 0;

  opt : any[];

  ans : string; 

  score : number = 0;
  div2 : boolean = false;
  div1 : boolean = true;
  div3: boolean=false;

  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;

  constructor(private _service : QuizserviceService, private _router : Router) { 
      this.radioSelected = "";
      this.getSelecteditem();
  }

  getSelecteditem(){
    
   // this.radioSelectedString = (this.radioSelected);
    console.log(typeof this.radioSelected);
    console.log(typeof this.ans);
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
        this.ans = this.quizlist[this.i].answer;
		  }
    );

    this.div1=false;
    this.div3=true;
    
  }

  onClickNext() {
    console.log(this.ans);
    console.log(this.radioSelected);
    this.ans = this.quizlist[this.i].answer;
    if(this.ans === this.radioSelected){
      this.score++;
    }
    this.i++;
    this.opt = this.quizlist[this.i].options;
  }

  onSubmit() {
    this.ans = this.quizlist[this.i].answer;
    if(this.ans === this.radioSelected){
      this.score++;
    }
    this.div2=true;
    this.div3=false;
  }
  

  startTimer() {
	  this._service.timer = setInterval( () => {
		  this._service.seconds++;
	  }, 1000);
  }

  answer(qid,choice) {

  }
  

}
