import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  mycase:number;

  constructor() { 
    this.mycase = 5;
  }

  ngOnInit() {
  }

}
