import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  templateUrl: './pipe-ex.component.html',
  styleUrls: ['./pipe-ex.component.css']
})
export class PipeExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  celcius: number=0;
  Fahrenheit: number=0; 
  
  name:string="samreen";
  toDate: Date = new Date();
numDate=1590319189931;
strDate="Sun May 24 2020 19:16:23"; 
obj={"price":45,
"item" : "Tea"
}
}
