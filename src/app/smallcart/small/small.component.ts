import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})

export class SmallComponent implements OnInit {

  items = [] ;
  allItems = [] ;

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {

    this.itemService.getProducts().subscribe(data=>{

      this.allItems = data ;

      var arr = [] ;
      data.forEach(dt =>{


        if(dt.order>0){
           arr.push(dt) ;
        }

      });

      this.items = arr ;



    });

    console.log(this.items) ;

  }

}
