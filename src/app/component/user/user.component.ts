import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserDto } from './Models/UserDto'; 
 import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  displayedColumns: string[] = ['usuario', 'primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido'];
  dataSource: MatTableDataSource<UserDto>;

  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource<UserDto>();
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: UserDto[]) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

}
