import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counterValue=1;
  countLessThenOne=true;
  countLessThenOne1=true;

  
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    
  }

  increment(){
    if(this.counterValue==10)
    {
      this.countLessThenOne1=false;
    }
    else{
      this.countLessThenOne1=true;
      this.counterValue++;
    }
 
    
  }

}
