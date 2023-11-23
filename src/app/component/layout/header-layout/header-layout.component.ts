import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRequest, UserDto } from '../../user/Models/UserDto';
import { CreateUserComponent } from '../../user/create-user/create-user.component';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass']
})
export class HeaderLayoutComponent {


  constructor(private userService: UserService,public dialog: MatDialog) {
  } 
  createUser() {
    this.openDialogEdit()
    }
  openDialogEdit(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '50%',
      height:'60%',
      data:{}
     });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const userRequest: UserRequest = {
          ...result
        };
  
        this.userService.createUser(userRequest).subscribe(
          (data: UserDto) => {
           },
          (error) => {
            console.error('Error al actualizar el usuario', error);
          }
        );
      }
    });
  }
  

}
