import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  public nau$!: Observable<any>;
  public imgNau!: any;
  public strs!:any;
  public pilots!:any;

  constructor(private readonly route: ActivatedRoute, private readonly http: HttpClient) { }

  ngOnInit(): void {
    /* const urlNau = this.route.snapshot.params['urlPilots'];
    this.nau$ = this.http.get(urlNau);
    this.strs = urlNau.split('/')[5]; */   
    /* this.getPilots().subscribe(data => {this.pilots = data;
    const pilots2 = Array.of(this.pilots);
    this.pilots = pilots2[0].pilots;
    }) */
  }

  getPilots(){
    return this.http.get("https://swapi.dev/api/starships/5")
    .pipe(
    map(res => this.pilots = res)
    )
  }

}
