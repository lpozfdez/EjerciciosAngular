import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/shared/services/dataTransfer.service';

@Component({
  selector: 'crud-layout',
  templateUrl: './crud-layout.component.html',
  styleUrls: ['./crud-layout.component.css']
})
export class CrudLayoutComponent {

  constructor( private dataServ: DataTransferService ){}


}
