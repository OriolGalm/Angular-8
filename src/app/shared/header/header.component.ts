import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwarsService } from 'src/app/swars.service';
import { Contact } from '../models/contact.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("closeButton") closeButton: any;

  loginForm!: FormGroup;
  signupForm!: FormGroup;
  person!:any;
  names!: string;

  constructor(private readonly fb: FormBuilder, public swSvc: SwarsService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.initLogin();
    this.signupForm = this.initForm();
  }

  onSubmit(response:Contact){
    this.swSvc.signUp(response);
    this.names = this.swSvc.namesSvc;
    this.signupForm.reset();
  }

  onLogin(response:any){
    this.person = JSON.parse(localStorage.getItem("userData") || "[]");
    JSON.stringify(this.person); 
    for(let i = 0; i < this.person.length; i++){
      if(response.emailLogin == this.person[i].email && response.passLogin == this.person[i].password){
        this.names = `${this.person[i].firstName} ${this.person[i].lastName}`;
        this.closeButton.nativeElement.click();
        this.swSvc.validation = true;
        this.loginForm.reset();
      }
    }
    if(this.swSvc.validation == false){
       alert("Wrong information");
    }
  }

  close(){
    this.swSvc.validation = false;
    this.names = "";
    this.router.navigate(['/']);
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
