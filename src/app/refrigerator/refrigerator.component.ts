import { Component, OnInit } from '@angular/core';

import * as product from '../data/products.json';


@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pd:any=(product as any).default;
  

  togglesection(prod:any){
    this.pd[prod].toggle=!this.pd[prod].toggle;
  }

}
