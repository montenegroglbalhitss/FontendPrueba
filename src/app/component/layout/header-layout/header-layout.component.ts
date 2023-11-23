import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRequest, UserDto, Cargo, Departamento } from '../../user/Models/UserDto';
import { CreateUserComponent } from '../../user/create-user/create-user.component';
import { UserService } from '../../user/user.service';
import { DepartamentoService } from '../../departamento/departamento.service';
import { CargoService } from '../../cargo/cargo.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass']
})
export class HeaderLayoutComponent {
  departamentos:Departamento[] = [];
  cargos:Cargo[] = [];
  titulo:string = '';
  loading:boolean = false;
 
  @Output() isUpdateListUsersEmitter = new EventEmitter<boolean>();

  constructor(private userService: UserService,
    private departamentoService: DepartamentoService,
    private cargoService: CargoService,
     public dialog: MatDialog) {
      this.getDepartamentos();
      this.getCargos();
  }
  createUser() {
    this.openDialogEdit()
  }
  openDialogEdit(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '50%',
      height: '75%', // Definir la altura del modal, puede ser un valor en píxeles o porcentaje
      data: {}
    });

 

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const userRequest: UserRequest = {
          ...result
        };

        this.createUserAction(userRequest);

      }
    });
  }

  
  getDepartamentos(){
    this.loading = true;
    this.departamentoService.getDepartamentos()
    .subscribe({
      next: (res): void => {
          this.departamentos = res;
      },
      error: (error): void => {
        console.log(error);
        this.loading = false;
      },
      complete: (): void => {
        this.loading = false;
      }
    });
  }

  getCargos(){
    this.loading = true;
    this.cargoService.getCargos()
    .subscribe({
      next: (res): void => {
          this.cargos = res;
      },
      error: (error): void => {
        console.log(error);
        this.loading = false;
      },
      complete: (): void => {
        this.loading = false;
      }
    });
  }


  createUserAction(userRequest: UserRequest) {
    this.userService.createUser(userRequest)
      .subscribe(
        {
          next: (data) => {

          },
          error: (error) => {
            console.error('Error al actualizar el usuario', error);

          },
          complete: () => {
            this.isUpdateListUsersEmitter.emit(true);
          }
        }
      );
  }


}
