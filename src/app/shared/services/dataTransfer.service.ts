import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/crud/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class DataTransferService {

  private _dataSubject = new Subject<User>();
  private _userHistorial: User[] = [];

  constructor() { this.getToLocalStorage() }

  get userHistorial(): User[] {
    return this._userHistorial;
  }

  sendData( data: User ): void{
    this._dataSubject.next(data);
  }

  getData(): Subject<User>{
    return this._dataSubject;
  }

  getToLocalStorage(): void {

    const localData = localStorage.getItem('users');
    if(!localData) return;
    const localDataParse: User[] = JSON.parse(localData);

    localDataParse.forEach( (user: User) => {
      this._userHistorial.push(user);
    });

  }


  // sendToLocalStorage(user: User): void {

  //   if (this._userHistorial.length === 0) {

  //     this._userHistorial.push(user);

  //   } else {

  //     const userExists = this._userHistorial.filter(u => u.email.toLowerCase().localeCompare(user.email.trim().toLowerCase()));
  //     console.log( userExists);

  //     if (userExists.length === 0 ){
  //       this._userHistorial.push(user);
  //       localStorage.setItem('users', JSON.stringify(this._userHistorial));
  //     }

  //   }

  // }

  sendToLocalStorage(user: User): void {

    const userExists = this._userHistorial.some(u =>
      u.email.toLowerCase().trim() === user.email.toLowerCase().trim()
    );

    if (!userExists) {
      this._userHistorial.push(user);
      localStorage.setItem('users', JSON.stringify(this._userHistorial));
    }

  }

  updateHistorial( user: User ): void{
    const userDeleted = this._userHistorial.indexOf(user);

    this._userHistorial.splice(userDeleted,1);

    console.log(this._userHistorial);

    localStorage.setItem('users', JSON.stringify(this._userHistorial));

  }


}
