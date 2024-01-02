import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { User } from 'src/app/crud/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class DataTransferService {

  private _dataSubject = new Subject<User>();
  private _userHistorial: User[] = [];

  private _editUserSubject = new Subject<User>();
  private _dataOrigin = new Subject<string>();

  constructor(){
    this.getToLocalStorage()
  }

  get userHistorial(): User[] {
    return this._userHistorial;
  }

  //Transferencia dde datos registro-tabla

  sendData( data: User ): void{
    this._dataSubject.next(data);
  }

  getData(): Subject<User>{
    return this._dataSubject;
  }

  //LocalStorage

  getToLocalStorage(): void {

    const localData = localStorage.getItem('users');
    if(!localData) return;
    const localDataParse: User[] = JSON.parse(localData);

    localDataParse.forEach( (user: User) => {
      this._userHistorial.push(user);
    });

  }

  sendToLocalStorage(user: User): void {

    const userExists = this._userHistorial.some(u =>
      u.email.toLowerCase().trim() === user.email.toLowerCase().trim()
    );

    if (!userExists) {
      this._userHistorial.push(user);
      localStorage.setItem('users', JSON.stringify(this._userHistorial));
    }

  }

  //Borrado de usuarios

  deleteToHistorial( user: User ): void{
    const userDeleted = this._userHistorial.indexOf(user);

    this._userHistorial.splice(userDeleted,1);

    console.log(this._userHistorial);

    localStorage.setItem('users', JSON.stringify(this._userHistorial));

  }

  //Edición de usurios

  sendEditUser(user: User): void {
    this._editUserSubject.next(user);
  }

  getEditedUser(): Subject<User> {
    return this._editUserSubject;
  }

  setDataOrigin( origin: string ){
    this._dataOrigin.next(origin);
  }

  get dataOrigin(): Subject<string> {
    return this._dataOrigin;
  }

  sendEditToLocalStorage(user: User, index: number): void {

    this._userHistorial[index]= {
      name: user.name,
      city: user.city,
      email: user.email,
      password: user.password,
      country: user.country,
      suscription: user.suscription,
    }

    console.log(this._userHistorial[index]);

    localStorage.setItem('users', JSON.stringify(this._userHistorial));

  }

}
