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

  getNewUser(): void {

    this.dataServ.getData().subscribe(user => {

      if (this.users.length === 0) {

        this.users.push(user);
        this.dataServ.sendToLocalStorage(user);

      } else {

        const userExists = this.users.filter(item => item.email === user.email);
        console.log(userExists);

        if (userExists.length === 0) {
          this.users.push(user);
          this.dataServ.sendToLocalStorage(user);
        }else{
          alert(`Ya existe un usuario con el email ${user.email}`);
        }

      }

    });

  }

  onDelete( index: number ): void{

    const deleted = this.users.splice(index,1);
    this.dataServ.deleteToHistorial(deleted[0]);
    console.log(deleted[0]);

  }

  onEdit( index: number ): void{

    const updated = this.users[index];

    this.dataServ.setDataOrigin("tabla");
    this.dataServ.sendEditUser(updated);

    this.getEditedUser(index);

  }

  getEditedUser( index: number ): void{

    this.dataServ.getEditedUser().subscribe( userUpdated => {

      this.users[index] = {
        name: userUpdated.name,
        city: userUpdated.city,
        email: userUpdated.email,
        password: userUpdated.password,
        country: userUpdated.country,
        suscription: userUpdated.suscription,
      }

      //console.log(this.users[index]);

      this.dataServ.sendEditToLocalStorage( this.users[index], index );

    });

  }



}
