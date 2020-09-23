import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ItemService} from '../../services/item.service';
import {Items} from '../../data/model';

@Component({
  selector: 'app-crd',
  templateUrl: './crd.component.html',
  styleUrls: ['./crd.component.css']
})

export class CrdComponent implements OnInit {

  @Input() title: string = 'Title' ;
  @Input() price: number = 10 ;
  @Input() item : Items ;


  items = [] ;

  constructor(private route : Router , private itemService : ItemService) { }

  ngOnInit(): void {

    this.itemService.getProducts().subscribe(data=> this.items = data) ;

  }

  nav(id){
    this.route.navigate(['product' , id]);
  }


  onClick() {

    if (this.item.order < this.item.stock) {

      var i = this.items;

      for (let itm of i) {

        if (itm._id === this.item._id) {
          itm.order += 1;
        }

      }

      this.itemService.setProducts(i);


    }


  }

}
