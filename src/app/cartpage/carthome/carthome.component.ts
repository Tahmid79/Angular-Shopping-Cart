import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-carthome',
  templateUrl: './carthome.component.html',
  styleUrls: ['./carthome.component.css']
})

export class CarthomeComponent implements OnInit {

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



  }

}
