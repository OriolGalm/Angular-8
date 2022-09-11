import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  public pilots$!: Observable<any>;

  constructor(private readonly route: ActivatedRoute, private readonly http: HttpClient) { }

  ngOnInit(): void {
    const urlPilots = this.route.snapshot.params['urlPilots'];
    this.pilots$ = this.http.get(urlPilots);
    //console.log("pilots: ", urlPilots);
  }

}
