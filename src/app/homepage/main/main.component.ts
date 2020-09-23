import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  public items = [] ;
  public foods : string[] ;
  p  ;

  constructor(private itemService : ItemService) {

  }

  ngOnInit(): void {

    this.itemService.getProducts().subscribe(data => this.items = data) ;

    this.itemService.getFood().subscribe(data => this.foods = data) ;

  }


  change(){
   var newFoods = ['pizza' , 'mango' , 'apple'] ;
      this.itemService.setFood(newFoods) ;
  }



}
