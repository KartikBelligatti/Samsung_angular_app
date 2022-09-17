import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// String interpolation
title = 'SAMSUNG';

//property binding
public logo="https://logos.textgiraffe.com/logos/logo-name/Kartik-designstyle-jungle-m.png";

//Event binding
onSearch(){
  alert("You have clicked on search")
}

// two way binding
  name="kartik"

  //Accessing the Search Component
//Property
productentered: string=' '  

//Event
search_product(product_name:string):void{ //Laptop
  if(!product_name)
  {
    this.productentered=' ';
  }
  this.productentered=product_name; //Laptop
  console.log(product_name)
}
}
