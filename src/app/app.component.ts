import { Component } from '@angular/core';

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
}
