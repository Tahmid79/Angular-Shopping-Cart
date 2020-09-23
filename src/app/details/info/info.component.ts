import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../services/item.service';
import {Items} from '../../data/model';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id = '';
  item : Items ;
  items = [] ;

   qty = 0 ;

  foods: string[] = [] ;

  constructor(private route : ActivatedRoute , private itemService : ItemService ) { }

  ngOnInit(): void {

    //this.id  = parseInt( this.route.snapshot.paramMap.get('id')  ) ;
    this.id  = ( this.route.snapshot.paramMap.get('id')  ) ;

    this.itemService.food.subscribe(data => this.foods = data ) ;


    this.itemService.getProducts().subscribe(data =>{

      this.items = data ;

      for(let item of data){
        if(item._id===this.id){
          this.item = item ;
        }
      }


    } )  ;


  }


  onck(){
      if(this.qty!=null  &&   this.qty + this.item.order <= this.item.stock  ){

        var i =  this.items ;

        for(let itm of i ){

          if(itm._id===this.item._id){

            itm.order += this.qty ;

          }

        }


        this.itemService.setProducts(i) ;

        console.log('Stock = ' + this.item.stock) ;
        console.log('Order ' + this.item.order) ;




      }
  }

}
