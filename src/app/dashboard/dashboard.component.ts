import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fname:any
  lname:any
  email:any
  phone:any
  constructor() { 
    this.fname = localStorage.getItem("fname")
    this.lname = localStorage.getItem("lname")
    this.email = localStorage.getItem("email")
    this.phone = localStorage.getItem("phone")
  }

  ngOnInit(): void {
  }

}
