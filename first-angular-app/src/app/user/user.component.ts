import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  //The name should describe the custom event you plan on emitting
  @Output() select = new EventEmitter();
  // avatar=input.required<string>(); //input is a generic function
  // name=input.required<string>();//this is signal input

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  // imagePath=computed(()=>'assets/users/' + this.avatar())

  onSelectUser() {
    // this.avatar.set() this will give an error because the property taken with the help of the input is readonly and cannot be set inside the class

    this.select.emit(this.id);
    // pass the information that a specific user was selected to the component that's using the userComponent
  }
}
