import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizquestion } from './quizquestion';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  constructor(private _http : HttpClient) { }

  fetchQuizListFromRemote() : Observable<any> {
    return this._http.get<any>("http://localhost:8080/gladiator-rest/rest/quizlist");
  }

  addQuestionToRemote(quizquestion : Quizquestion) : Observable<any> {
    return this._http.post<any>("http://localhost:8080/gladiator-rest/rest/addquizquestion", quizquestion);
  }

  fetchQuizListByTopicFromRemote(topic : string) : Observable<any> {
    return this._http.get<any>("http://localhost:8080/gladiator-rest/rest/listByTopic/" + topic);
  }

}
