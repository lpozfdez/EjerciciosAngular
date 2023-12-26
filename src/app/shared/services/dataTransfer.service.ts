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

    localDataParse.forEach( (user) => {
      this._userHistorial.push(user);
    });

    console.log(this._userHistorial);

  }

  // getToLocalStorage(): User[] {
  //   const localData = localStorage.getItem('users');

  //   if(!localData) return [];

  //   const localDataParse: User[] = JSON.parse(localData);

  //   localDataParse.forEach( (user) => {
  //     if(!this._userHistorial.includes(user)) this._userHistorial.push(user);
  //   });

  //   if(this._userHistorial.length === 0) return [];

  //   return this._userHistorial;
  // }

  // sendToLocalStorage( users: User[] ): void{
  //   users.forEach( user => {
  //     console.log(user);
  //     this._userHistorial.push(user);
  //   } );

  //   if(this._userHistorial.length > 0) localStorage.setItem('users', JSON.stringify(this._userHistorial));
  // }

  sendToLocalStorage(user: User): void{

    if(!this._userHistorial.includes(user)) this._userHistorial.push(user);

    localStorage.setItem('users', JSON.stringify(this._userHistorial));
  }




}
