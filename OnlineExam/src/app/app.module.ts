import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SetquestionComponent } from './setquestion/setquestion.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ExamComponent } from './exam/exam.component';
import { UserreportComponent } from './userreport/userreport.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamstartComponent } from './examstart/examstart.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    ExamComponent,
    ExamstartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
