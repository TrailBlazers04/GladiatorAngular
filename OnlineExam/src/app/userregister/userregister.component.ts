import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  user = new User();
  msg = "";

  states = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",  "Chhattisgarh",
              "Goa",  "Gujarat",  "Haryana", "Himachal Pradesh" ];
  
  cities = ["Delhi", "Agra", "Kolkata", "Mumbai", "Bangalore", "Hyderabad", "Patna", "Jaipur",
             "Chennai"  ];

  qualifications = ["S.S.C", "H.S.C", "Diploma", "B.Tech", "B.E", "B.Sc", "M.Sc", "B.A", "M.A", "B.B.A", "M.B.A", "Ph.D."];
                 
  constructor( private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['userlogin']);
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
