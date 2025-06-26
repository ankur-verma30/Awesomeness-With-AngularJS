import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomNumber= Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectedUser=DUMMY_USERS[randomNumber]; //whatever property we are defining in the class will be available in the template
}
