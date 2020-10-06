import { Component, OnInit } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  websiteList: any = ['JAVA', 'SQL', 'Python']
  websiteList1: any = ['Maharastra','West Bengal', 'Karnataka','Tamil Nadu','Odisha','Andra Pradesh']
  websiteList2: any = ['Mumbai','Kolkata', 'Bangalore','Chennai','Bhubaneswar','Hyderabad']
  websiteList3: any = ['50','60', '70','80','90']
  
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  changeWebsite(e) {
    console.log(e.target.value);
  }
}