import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


fname=""
lname=""
email=""
phone=""
resultf=""
resultl=""
resultmail=""
resultphn=""

//register group model creation
// 1)form group creation
registerForm=this.fb.group({
  //2)form array creation
  fname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  lname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  email:['',[Validators.required,Validators.pattern('[a-z0-9]*')]],
  phone: ['', [Validators.required, Validators.pattern('[0-9 ]*')]]



})





  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

register(){

var fname=this.registerForm.value.fname
var lname=this.registerForm.value.lname
var email=this.registerForm.value.email
var phone=this.registerForm.value.phone

if(this.registerForm.valid){
  // localStorage.setItem("fname",JSON.stringify(fname))
  // localStorage.setItem("lname",JSON.stringify(lname))
  // localStorage.setItem("email",JSON.stringify(email))
  // localStorage.setItem("phone",JSON.stringify(phone))
  localStorage.setItem("fname",fname)
  localStorage.setItem("lname",lname)
  localStorage.setItem("email",email)
  localStorage.setItem("phone",phone)

  this.router.navigateByUrl("dashboard")

}


}













































}
