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
  public pilots!:any;

  constructor(private readonly route: ActivatedRoute, 
    private readonly swSvc: SwarsService,
    private readonly http: HttpClient) { }

  ngOnInit(): void {
    const urlNau = this.route.snapshot.params['url'];
    this.nau$ = this.http.get(urlNau);
    this.strs = urlNau.split('/')[5];
    //this.pilots = this.http.get("https://swapi.dev/api/starships/12")
    //this.pilots = urlNau+"pilots";
    //console.log("Pilots: ", this.pilots);   
    this.getPilots().subscribe(data => {this.pilots = data;
    this.pilots = Array.of(this.pilots);
    console.log("Pilots: ", this.pilots);
    })
  }

  getPilots(){
    return this.http.get("https://swapi.dev/api/starships/12")
    .pipe(
    map(res => this.pilots = res)
    )
  }

}
