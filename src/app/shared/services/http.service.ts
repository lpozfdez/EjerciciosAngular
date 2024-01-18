import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map, of, switchMap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchService {
  constructor(private httpClient: HttpClient) { }
  public data = "assets/world-universities.csv";
  public universities: string[][] = [];

  searchToCsv( tag:string ){
    this.universities.length =0;
    if( tag.length === 0 )return;
    return this.httpClient.get(this.data, {responseType: 'text'}).pipe(
      switchMap( resp =>{
        if(resp.length>0){
          const universities = resp.split("\n");
          for(let university of universities){
            const uni = university.split(",")
            if(uni.length > 1 && uni[1].toLowerCase().includes(tag.toLowerCase())){
              this.universities.push(uni);
            }
          }
        }
        return of(this.universities);
      }),
    )
  }

  searchToCsvByCountry( tag:string ){
    this.universities.length = 0;
    if( tag.length === 0 )return;
    return this.httpClient.get(this.data, {responseType: 'text'}).pipe(
      map( resp =>{
        const universities = resp.split("\n");
        for(let university of universities){
          const uni = university.split(",")
          if(uni[0]===tag) this.universities.push(uni);
        }
      }),
      map(()=>this.universities),
    )
  }

}
