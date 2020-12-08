import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
searchTerm: string= '';
latestInfo;
  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
  }

  justPrint(){
    this.forecastService.info(this.searchTerm).subscribe((res) => {
      this.latestInfo = res;
      console.log(this.latestInfo);
    });
  }

}
