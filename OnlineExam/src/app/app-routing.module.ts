import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SetquestionComponent } from './setquestion/setquestion.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserreportComponent } from './userreport/userreport.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { 
    path: 'adminhome', 
    component: AdminhomeComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'setquestion', component: SetquestionComponent },
      { path: 'list', component: ListComponent },
      { path: 'search', component: SearchComponent },
      { path: '**', redirectTo: 'search', pathMatch: 'full' }
    ]
  },
  { 
    path: 'user', 
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
      { path: 'userlogin', component: UserloginComponent },
      { path: 'userregister', component: UserregisterComponent }
    ]
  },
  { 
    path: 'userhome', 
    component: UserhomeComponent,
    children: [
     
      { path: 'userreport', component: UserreportComponent }
    ]
  }
  ,{path: 'exam', component: ExamComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
                                HomeComponent, AdminloginComponent,
                                AdminhomeComponent, ListComponent,
                                SearchComponent, SetquestionComponent,
                                UserComponent, UserloginComponent, 
                                UserregisterComponent, UserhomeComponent,
                                ExamComponent, UserreportComponent
                          ];
