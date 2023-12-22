import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { DataTransferService } from 'src/app/shared/services/dataTransfer.service';

@Component({
  selector: 'crud-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public users: User[] = [];

  constructor( private dataServ: DataTransferService ){}

  ngOnInit(): void {
    // const localData = localStorage.getItem('users');
    // if(localData) this.users.push( JSON.parse(localData) );
    this.getNewUser();
  }

  getNewUser(){

    this.dataServ.getData().subscribe( user => {
      console.log(user);
      this.users.push(user);

    });

    // let usersJson = JSON.stringify(this.users);
    // localStorage.setItem('Users', usersJson);

  }



}
