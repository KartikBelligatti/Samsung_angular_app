import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //event to hide the products

  isVisible:boolean=true;
  hide_product(){
    this.isVisible=!this.isVisible;
  }

}
