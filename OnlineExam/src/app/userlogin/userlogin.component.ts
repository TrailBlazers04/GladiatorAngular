import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user = new User();
  msg = "";

  constructor( private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/userhome']);
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad credentials, please enter valid email and password";
      }
    )
  }

}
