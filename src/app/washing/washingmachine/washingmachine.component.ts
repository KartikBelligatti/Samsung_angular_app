import { Component, OnInit } from '@angular/core';
import * as wash from '../wm.json';

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  wmach:any=(wash as any).default;

  
}
