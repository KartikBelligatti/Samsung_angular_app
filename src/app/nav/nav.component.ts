import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
  admin:boolean=false;
name:any="";
adname:any="";
  cartCount: number=0;


  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
        this.name="Hello Kartik"
       
      }
    );

    

    this.authService.authad.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.admin = data;
        console.log(this.admin);
        
      }
    );

 

    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
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
  // name="kartik"

  //Accessing the Search Component
//Property
productentered: string=' '  

//Event
search_product(product_name:string):void{ //Laptop
  if(product_name=='')
  {
    // this.productentered=' ';
    alert('search something');
  }
  
  else{
    

  this.productentered=product_name; //Laptop
}
  console.log(product_name)
}

isVisible:boolean=false;
hide_product(){
  this.isVisible=!this.isVisible;
}
}
