import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from "../Models/country.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCountrysInformations():Observable<CountryModel[]>
  {
    return this.http.get<CountryModel[]>("https://disease.sh/v3/covid-19/countries");
  }
}
