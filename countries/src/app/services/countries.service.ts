import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient:HttpClient) { }

  public getCountries():any{
    return this._httpClient.get("https://restcountries.eu/rest/v2/all");
  }

}
