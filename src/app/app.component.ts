import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './component/user/create-user/create-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Frontend';
  foods = [
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'burger', viewValue: 'Burger' },
    // Otros elementos
  ];

  isUpdateListUsers:boolean = false;


  getIsUpdateListUsers(event:boolean){
    this.isUpdateListUsers = event;
  }


}
