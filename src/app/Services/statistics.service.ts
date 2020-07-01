import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
private _ipapi: string = "https://ipapi.co/json/";
private _covidApi: string = "https://api.covid19api.com/summary";
private _restAPi: string = "https://restcountries.eu/rest/v2/all?fields=name;flag";



  constructor(private http: HttpClient) { }

  getUserLocation(){
    return this.http.get<any>(this._ipapi).toPromise();
  }

 getCovidStats(){
   return this.http.get<any>(this._covidApi).toPromise();
 }

getCountryFlag(){
  return this.http.get<any[]>(this._restAPi).toPromise();
}

}
