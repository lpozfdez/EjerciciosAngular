import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/crud/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class DataTransferService {

  public dataSubject = new Subject<User>();

  constructor() { }

  sendData( data: User ): void{
    this.dataSubject.next(data);
  }

  getData(): Subject<User>{
    return this.dataSubject;
  }



}
