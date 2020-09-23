import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})


export class TotalComponent implements OnInit {

  items : []  ;

  allItems : [] ;

  @Input() totals = [] ;

  constructor() { }

  ngOnInit(): void {

  }

  getTotal(){

    var sum =0 ;

    for(let it of this.totals){

      if(it.confirmed>0){
        var sbt = it.confirmed * it.price ;

        sum += sbt ;


      }

    }

    return sum ;


  }

}
