import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchService {
  constructor(private httpClient: HttpClient) { }
  public data = "assets/world-universities.csv"

  searchToCsv( tag:string ){
    if( tag.length === 0 )return;
    return this.httpClient.get(this.data, {responseType: 'text'})
  }

  searchToCsvByCountry( tag:string ){
    if( tag.length === 0 )return;
    return this.httpClient.get(this.data, {responseType: 'text'}).pipe(
      map( resp=>resp.split("\n") ),
      tap(console.log)
    )
  }

}
