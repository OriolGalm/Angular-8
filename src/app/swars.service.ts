import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EMPTY, expand, map, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwarsService {

  constructor(private readonly http: HttpClient) { }

  getData(){
    return this.http.get(environment.api)
     .pipe(
      //map((x:any) => x?.results)
      expand((response: any) => response.next ? this.http.get(response.next) : EMPTY),
      reduce((acc, current: any) => acc.concat(current.results), [])
    )  
  }
}
