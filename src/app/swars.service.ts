import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EMPTY, expand, map, Observable, reduce } from 'rxjs';
import { Contact } from './shared/models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class SwarsService {

  public validation: boolean = false;
  data:Contact[] = [];
  namesSvc!:any;
  cont:number = 1;

  constructor(private readonly http: HttpClient) { }

  getNaus(){
    return this.http.get(environment.api+"?page=")
     .pipe(
      map((x:any) => x?.results)
    )  
  }

  getAllNaus(){
    return this.http.get(environment.api+ `?page=2`)
     .pipe(
      expand((response: any) => response.next ? this.http.get(response.next) : EMPTY),
      reduce((acc, current: any) => acc.concat(current.results), [])
    )  
  }

  getOneNau(url:string){
    return this.http.get(environment.api+url);
  }

  signUp(response:Contact){
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
      localStorage.setItem("userData", JSON.stringify(this.data));
    }
  }
}
