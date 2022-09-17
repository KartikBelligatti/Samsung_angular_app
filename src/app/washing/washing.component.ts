import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.css']
})
export class WashingComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  @Input()product:any;


  pd=false;
 
  showproductDetailsToggle()
  {
    this.pd=!this.pd;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    
    if(this.pd){
      content="fa fa-chevron-down";
      
    }
    else{
      content='fa fa-chevron-up';
     
    }
    return content;
  }

 

}
