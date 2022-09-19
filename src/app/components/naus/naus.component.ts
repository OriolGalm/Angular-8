import { Component, OnInit } from '@angular/core';
import { SwarsService } from 'src/app/swars.service';

@Component({
  selector: 'app-naus',
  templateUrl: './naus.component.html',
  styleUrls: ['./naus.component.css']
})
export class NausComponent implements OnInit {

  swarsNaus:any;
  swarsNausTotal:any;

  constructor(private readonly swarsSvc: SwarsService) { }

  ngOnInit(): void {
    this.swarsSvc.getNaus()!.subscribe(naus => {
      this.swarsNaus = naus;
      //console.log("Naus: ", naus);
    })
    this.nextPage();
  }

  nextPage(){
    this.swarsSvc.getAllNaus()
    .subscribe(t => this.swarsNausTotal = t)
  }

}
