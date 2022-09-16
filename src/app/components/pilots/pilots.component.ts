import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  @Input() valuePilots!:any;
  @Input() idPilots!:any;

  public showPilots: boolean = false;
  private sPilots: string = "Show Pilots";
  private hPilots: string = "Hide Pilots";
  public pTemp: string = "Show Pilots";
  public strs: any;
  public pilotsImg!:any;
  public urlImg: string[] = [];

  constructor() { }

  ngOnInit(): void {  }

  getPilots(){
    this.showPilots = !this.showPilots;
    this.showPilots == true ? this.pTemp = this.hPilots : this.pTemp = this.sPilots ;

    for(let i = 0; i < this.idPilots.length; i++){
      this.strs = this.valuePilots[i].url.split('/')[5]; 
      this.urlImg.push( "https://starwars-visualguide.com/assets/img/characters/" + this.strs + ".jpg");
      console.log("ID :", this.urlImg);
    }
    
    console.log("urlimg: ", this.idPilots);
  }
  
}
