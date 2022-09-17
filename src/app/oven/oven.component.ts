import { Component, OnInit } from '@angular/core';
import { Oven } from '../oven';
import { OvenService } from '../oven.service';

@Component({
  selector: 'app-oven',
  templateUrl: './oven.component.html',
  styleUrls: ['./oven.component.css']
})
export class OvenComponent implements OnInit {

  constructor(private microservice:OvenService) { }
  micro: Oven[]=[];
  ngOnInit(): void {
    const microObservable= this.microservice.getOvenDetails();
    microObservable.subscribe((microData: Oven[])=>{
      this.micro=microData;
    });
  }


  
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

  

}
