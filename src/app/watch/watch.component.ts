import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // product = 'Laptop'

  productentered: string=' '  

//Event
search_product(product_name:string):void{ //Laptop
  if(product_name=='')
  {
    // this.productentered=' ';
    alert('search something');
  }
  
  
  this.productentered=product_name  ; //Laptop
  console.log(product_name)
}


}
