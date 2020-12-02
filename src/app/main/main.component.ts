import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
searchTerm: string= '';
  constructor() { }

  ngOnInit(): void {
  }

  justPrint(value){
    console.log(value);
  }

}
