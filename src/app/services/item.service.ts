import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Items } from '../data/model';
import { Observable , BehaviorSubject } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Products} from '../../assets/data/dt';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ItemService {

  public str = '/assets/data/data.json' ;

  public food : BehaviorSubject<string[]>  ;

  public products : BehaviorSubject<Items[]> ;


  constructor(private http : HttpClient) {

    this.food = new BehaviorSubject(['pizza']) ;

    this.getItems().subscribe(data => {

      //data[0].order =  3 ;

      this.products =  new BehaviorSubject(data) ;

    }) ;

  }


  getProducts() : Observable<Items[]>{
    return this.products.asObservable() ;
  }

  setProducts( values ){
    return this.products.next(values) ;
  }


  getFood(): Observable<string[]>{
      return this.food.asObservable() ;
  }

  setFood(values){
      return this.food.next(values) ;
  }


  sortProducts(order){

    if(order==='Ascending'){

      this.getItems().subscribe(data =>{
          data.sort((a,b) => a.price -  b.price  )   ;
          this.setProducts(data) ;

       })

    }

    else if(order==='Descending'){

      this.getItems().subscribe(data =>{
        data.sort((a,b) =>  b.price -  a.price  ) ;
        this.setProducts(data) ;

      })

    }

    else {

      this.getItems().subscribe(data =>{
        this.setProducts(data) ;
      })

    }

}


  getItems() : Observable<Items[]>{

  //return  this.http.get<Items[]>(this.str)  ;


    var data = [] ;

    var products = Products ;



  for(let product of products){

      var s =  new Items() ;

      s.title = product.title ;
      s._id = product._id ;
      s.description = product.description ;
      s.picture = product.picture ;
      s.price = product.price ;
      s.stock = product.stock ;
      s.order = 0 ;
      s.confirmed = 0 ;

      data.push(s) ;

    }


    return of(data) ;

  }












}








