import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  info(city: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=767c4138efe1353bc76c2d428a4fc0f0`)
    .pipe( tap((res) =>{
      console.log('ddddd',city);
    }))
    
  }
}
