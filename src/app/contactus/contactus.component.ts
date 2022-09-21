import { Component, OnInit } from '@angular/core';
import { Contactus } from '../contactus';
import { ContactusService } from '../contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private conservice:ContactusService, private cdservice:ContactusService ) { }
  con: Contactus[]=[];
  cd:Contactus[]=[];
  ngOnInit(): void {
    const conObservable= this.conservice.getContactDetails();
    const cdObservable= this.cdservice.getCdDetails();
    conObservable.subscribe((conData: Contactus[])=>{
      this.con=conData;
    });

    cdObservable.subscribe((cdData: Contactus[])=>{
      this.cd=cdData;
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
