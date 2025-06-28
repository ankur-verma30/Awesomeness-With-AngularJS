import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId:string='u1'

  onSelectUser(id: string) {
    this.selectedUserId=id;
  }

  get selectedUser(){
    return this.users.find((user)=> user.id===this.selectedUserId)!;
  }
}
