import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.initLogin();
    this.signupForm = this.initForm();
    this.getLocalStorage();
    //localStorage.setItem("signupForm", JSON.stringify( this.signupForm ))
  }

  getLocalStorage(){
    let person = localStorage.getItem(JSON.parse("userData"));
    console.log(person)
  }

  onSubmit(response:any){
    localStorage.setItem("userData", JSON.stringify( response ))
    
  }

  onLogin(response:any){
    /* let email = response.emailLogin;
    let password = response.passLogin;
    let userDataEmail = localStorage.getItem(JSON.parse( 'userData.email' ));
    let userDataPass = localStorage.getItem(JSON.parse( 'userData.password' ));
    let userDataFirstNanme = localStorage.getItem(JSON.parse( 'userData.firstName' ));
    let userDataLastName = localStorage.getItem(JSON.parse( 'userData.lastName' ));
    if(email == userDataEmail && password == userDataPass){
      alert("Hello " + userDataFirstNanme + userDataLastName);
    } */
  }

  initLogin():FormGroup{
    return this.fb.group({
      emailLogin:['', Validators.required],
      passLogin:['', Validators.required]
    })
  }

  initForm():FormGroup{
    return this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['',[ Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  
}
