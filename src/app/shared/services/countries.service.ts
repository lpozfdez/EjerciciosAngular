import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from 'src/app/crud/interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {


  public baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.httpClient.get(`${this.baseUrl}/all`).pipe(

    )
  }

}
