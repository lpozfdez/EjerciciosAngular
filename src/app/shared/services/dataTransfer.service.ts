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


  sendToLocalStorage(user: User): void {

    if (this._userHistorial.length === 0) {

      this._userHistorial.push(user);

    } else {

      const userExists = this._userHistorial.filter(u => u.email.toLowerCase().localeCompare(user.email.trim().toLowerCase()));
      console.log( userExists);

      if (!userExists){
        this._userHistorial.push(user);
        localStorage.setItem('users', JSON.stringify(this._userHistorial));
      }

    }

  }




}
