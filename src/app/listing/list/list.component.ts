import { Component, OnInit , Input } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items =[];

  allItems = [] ;

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
      this.itemService.getProducts().subscribe(data=>{

        this.allItems = data ;

      });

  }

  onUpdate(){


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

  onCloseItem(id){
      var itm = this.allItems ;

      for(let it of itm){

        if(it._id ===id){
          it.order = 0 ;
        }

      }

    this.itemService.setProducts(itm) ;
  }



}
