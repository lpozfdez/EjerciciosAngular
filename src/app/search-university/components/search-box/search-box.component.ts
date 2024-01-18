import { Component, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { SearchService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'university-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(private service:SearchService){}

  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;

  public universitiesList: string[] = [];

  searchUniversity( value:string ){
    this.universitiesList.length = 0;

    this.service.searchToCsv(value)?.subscribe( universities => {
      if(!universities) return;
      for(let uni of universities){
        this.universitiesList.push(uni[1])
      }
    })
  }

  searchSpainUniversity(){
    this.universitiesList.length = 0;

    this.service.searchToCsvByCountry('ES')?.subscribe( resp => {
      for(let uni of resp){
        this.universitiesList.push(uni[1])
      }
    } )
  }

  searchPortugalUniversity(){
    this.universitiesList.length = 0;

    this.service.searchToCsvByCountry('PT')?.subscribe( resp => {
      if(resp.length===0) return;
      for(let uni of resp){
        this.universitiesList.push(uni[1])
      }
    })
  }

  searchRUnidoUniversity(){
    this.universitiesList.length = 0;
    this.service.searchToCsvByCountry('GB')?.subscribe( resp => {
      for(let uni of resp){
        this.universitiesList.push(uni[1])
      }
    })
  }

}
