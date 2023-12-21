import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'crud-layout',
  templateUrl: './crud-layout.component.html',
  styleUrls: ['./crud-layout.component.css']
})
export class CrudLayoutComponent {

  //public newUser?: Subject<User>;

  getNewUser( user: Subject<User> ){
    if( !user ) return;
    user.subscribe()
  }

}
