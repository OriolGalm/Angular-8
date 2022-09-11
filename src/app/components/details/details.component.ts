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

  constructor(private readonly route: ActivatedRoute, 
    private readonly swSvc: SwarsService,
    private readonly http: HttpClient) { }

  ngOnInit(): void {
    const urlNau = this.route.snapshot.params['url'];
    this.nau$ = this.http.get(urlNau);
    this.strs = urlNau.split('/')[5];
    /* this.pilots = urlNau+"pilots";
    console.log("Pilots: ", this.pilots); */
  }


}
