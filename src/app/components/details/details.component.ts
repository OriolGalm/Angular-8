import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SwarsService } from 'src/app/swars.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public nau$!: Observable<any>;
  public imgNau!: any;
  public strs!:any;
  public strs2!:any;
  public pilots:any = [];
  public pilotsInfo:any;
  public pil!:any;

  constructor(private readonly route: ActivatedRoute, 
    private readonly swSvc: SwarsService,
    private readonly http: HttpClient) { }

  ngOnInit(): any {
    const urlNau = this.route.snapshot.params['url'];
    this.nau$ = this.http.get(urlNau);
    this.strs = urlNau.split('/')[5];   
    
    this.getPilots();
    /*  for(let i = 0; i < this.pilots.length; i++){
        return this.http.get(this.pilots)
        .pipe(
          map(res => this.pilotsInfo = res)
        ).subscribe((x:any) => this.pil = x)
    }
      console.log("Pilots: ", this.pilots);
  }) */
  
    /*  */
    //this.http.get(this.pilots).subscribe(res => this.pil = res);
    
    //this.getPilotsInfo().subscribe((data: any[]) => {this.pilotsInfo = data})
    
  }

  getPilots(){
    return this.http.get("https://swapi.dev/api/starships/"+this.strs)
    .pipe(
    map(res => this.pilots = res)
    )
    .subscribe(data => {this.pilots = data;
      const pilots2 = Array.of(this.pilots);
      this.pilots = pilots2[0].pilots;
      console.log("Pilots: ", this.pilots);
      
      this.getPilotsInfo();
    })
    
  }

  getPilotsInfo():any{
    
    for(let i = 0; i < this.pilots.length; i++){
      //this.strs2 = this.pilots[i];
        return this.http.get(this.pilots[i])
        .subscribe((x:any) => {this.pil = x;
        console.log("Pilots Nom: ", this.pilots[i]);
        })
    }
  }

}
