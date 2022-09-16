import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SwarsService } from 'src/app/swars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public nau$!: Observable<any>;
  public imgNau!: any;
  public strs!:any;
  public pilots:any = [];
  public pilotsInfo:any = [];
  public pilotsInfo2:any = [];

  constructor(private readonly route: ActivatedRoute, 
    private readonly swSvc: SwarsService,
    private readonly http: HttpClient) { }

  ngOnInit(): any {
    const urlNau = this.route.snapshot.params['url'];
    this.nau$ = this.http.get(urlNau);
    this.strs = urlNau.split('/')[5];   
    this.getPilots();
  }

  getPilots(){
    return this.http.get("https://swapi.dev/api/starships/"+this.strs)
    .subscribe(data => {this.pilots = data;
      const pilots2 = Array.of(this.pilots);
      this.pilots = pilots2[0].pilots;
      
      for(let i = 0; i < this.pilots.length; i++){
        this.getPilotsInfo(i);
      }
      //console.log("Pilots :", this.pilots);
    })
  }

  getPilotsInfo(index:any):any{
        return this.http.get(this.pilots[index])
        .subscribe((x:any) => {this.pilotsInfo = x;
          this.pilotsInfo2.push(this.pilotsInfo);
        })
  }

}
