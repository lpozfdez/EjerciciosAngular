import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { DataTransferService } from 'src/app/shared/services/dataTransfer.service';

@Component({
  selector: 'crud-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {

  public users: User[] = [];

  constructor( private dataServ: DataTransferService ){}

  ngOnDestroy(): void {
    this.users = [];
  }

  ngOnInit(): void {

    if (this.dataServ.userHistorial.length > 0){
      this.dataServ.userHistorial.forEach( user =>{
        this.users.push(user);
      });
    }
    this.getNewUser();
  }

  getNewUser(){

    this.dataServ.getData().subscribe( user => {

      if( this.users.length === 0 ){
        this.users.push(user);
        this.dataServ.sendToLocalStorage(user);

      }else{

        this.users.forEach( item => {
          console.log(item.email);

          if(item.email !== user.email){
            this.users.push(user);
            console.log(user);
            this.dataServ.sendToLocalStorage(user);
          }
        });
      }

    });

    // if( this.users.length > 0 ) this.dataServ.sendToLocalStorage( this.users );
  }

}
