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

  public universitiesList?: string[];

  searchUniversity(){
    const newTag = this.tagInput.nativeElement.value;
    this.service.searchToCsv(newTag)?.subscribe(console.log)

  }

  searchSpainUniversity(){
    this.service.searchToCsvByCountry('ES')?.subscribe(console.log)
  }

}
