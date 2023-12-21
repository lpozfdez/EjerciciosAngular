import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  @Input() public formsValues?: Object = {}





}
