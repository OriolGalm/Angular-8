import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Contact{
  firstName: string,
  lastName:string,
  email:string,
  password:string
}

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
  data:Contact[] = [];
  names!: string;
  validation: boolean = false;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.initLogin();
    this.signupForm = this.initForm();
    console.log("Data : ", typeof this.data)
  }

  onSubmit(response:Contact){
    if(localStorage.getItem("userData") === null){
      this.data.push(response);
      localStorage.setItem("userData", JSON.stringify( this.data ));
    }else{
      this.data = JSON.parse(localStorage.getItem("userData")!);
      this.data.push({
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email,
        password: response.password
      });
      localStorage.setItem("userData", JSON.stringify(this.data))
    }
    this.signupForm.reset();
  }

  onLogin(response:any){
    this.person = JSON.parse(localStorage.getItem("userData") || "[]");
    JSON.stringify(this.person); 
    for(let i = 0; i < this.person.length; i++){
      if(response.emailLogin == this.person[i].email && response.passLogin == this.person[i].password){
        this.names = `${this.person[i].firstName} ${this.person[i].lastName}`;
        this.closeButton.nativeElement.click();
        this.validation = true;
      }
    }
    if(this.validation == false){
       alert("Wrong information");
    }
  }

  close(){
    this.validation = false;
    this.names = "";
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
