import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwarsService } from 'src/app/swars.service';

@Component({
  selector: 'app-naus',
  templateUrl: './naus.component.html',
  styleUrls: ['./naus.component.css']
})
export class NausComponent implements OnInit, AfterViewInit {

  swarsNaus:any;
  swarsNausTotal:any;

  constructor(private readonly swarsSvc: SwarsService) { }

  ngOnInit(): void {
    this.swarsSvc.getNaus()!.subscribe(naus => {
      this.swarsNaus = naus;
    })
  }

  ngAfterViewInit(){
    this.swarsSvc.getAllNaus()
    .subscribe(t => this.swarsNausTotal = t)
  }

}
