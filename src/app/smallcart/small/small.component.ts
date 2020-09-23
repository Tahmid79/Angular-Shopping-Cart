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


  }


  onCheckout(){

   var itm = this.allItems ;

   for(let it of itm){

     if(it.order>0  &&  ( it.confirmed + it.order < it.stock) ){

       var val = it.order ;
       it.order = 0 ;
       it.confirmed +=val ;

     }

   }

   this.itemService.setProducts(itm) ;





  }

}
