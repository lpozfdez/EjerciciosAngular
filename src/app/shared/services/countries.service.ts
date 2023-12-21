import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country } from 'src/app/crud/interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {


  public baseUrl: string = 'https://restcountries.com/v3.1';
  public namesUrl: string = 'all?fields=translations';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<string[]>{

    return this.httpClient.get<Country[]>(`${this.baseUrl}/${this.namesUrl}`).pipe(
      map( countries => countries.map( c => c.translations['spa'].common ) ),
    );
  }

}
