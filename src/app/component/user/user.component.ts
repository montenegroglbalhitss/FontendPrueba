import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from './user.service';
import { UserDto, UserRequest } from './Models/UserDto';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, interval, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { DialogComponent } from 'src/app/Services/dialog/dialog.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  private userRe: UserRequest|undefined;
  @Input() isUpdateListUsers:boolean = false;


  dataSource: any[] = []; // Utiliza tu tipo de datos UserDto aquí

  displayedColumns: string[] = ['usuario', 'nombres','apellidos', 'departamento', 'cargo','email', 'acciones'];



  constructor(private userService: UserService,public dialog: MatDialog) {
  } 

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if(propName === 'isUpdateListUsers'){
        if(this.isUpdateListUsers){
          this.ngOnInit();
        }
      }
    }
  }
  


  // Obtiene los encabezados personalizados para cada columna
  getColumnHeader(column: string): string {
    switch (column) {
      case 'usuario':
        return 'Usuario';
        case 'nombres':
          return 'Nombres';
        
      case 'apellidos':
        return 'Apellidos';
          
      case 'departamento':
        return 'Departamento';
        case 'cargo':
          return 'Cargo';
          case 'email':
            return 'Email';
      case 'acciones':
        return 'Acciones';
      default:
        return '';
    }
  }

  // Obtiene el valor correspondiente a la columna y su propiedad en UserDto
  getColumnValue(user: any, column: string): string {
    switch (column) {
      case 'usuario':
        return user.usuario;
        case 'nombres':
          return `${user.primerNombre} ${user.segundoNombre}`;
          case 'apellidos':
            return `${user.primerApellido} ${user.segundoApellido}`;
      case 'departamento':
        return user.departamento.nombre;
        case 'cargo':
          return user.cargo.nombre;
          case 'email':
            return user.email;
      case 'acciones':
        return this.createActionButtons(user); // Llama a la función para crear los botones
      default:
        return '';
    }
  }
    // Crea los botones de acciones (editar, eliminar, etc.) y los devuelve
    createActionButtons(user: any): string {
      return `
        <button mat-button color="primary" (click)="editUser(${user.id})">Editar</button>
        <button mat-button color="warn" (click)="deleteUser(${user.id})">Eliminar</button>
      `;
    }
  
    // Métodos para editar y eliminar usuarios
    editUser(userId: number) {

      this.openDialogEdit(userId)
      this.ngOnInit();

      // Lógica para editar el usuario
    }
    openDialogEdit(userId: any): void {
      const dialogRef = this.dialog.open(CreateUserComponent, {
        width: '50%',
        height: '75%', // Definir la altura del modal, puede ser un valor en píxeles o porcentaje

        data: { data:userId}
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const userRequest: UserRequest = {
            ...result
          };
    
          this.userService.updateUser(result.id, userRequest).subscribe(
            (data: UserDto) => {
              this.ngOnInit()
             },
            (error) => {
              console.error('Error al actualizar el usuario', error);
            }
          );
        }
      });
    }
    

    confirmDelete(userId: number): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '40%',
        data: { message: '¿Estás seguro que deseas eliminar este usuario?' }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteUser(userId);
        }
      });
    }
  
    deleteUser(userId: number): void {
      this.userService.deleteUser(userId).subscribe(
        (data: UserDto[]) => {
          this.ngOnInit()
         },
        (error) => {
          console.error('Error al obtener los usuarios', error);
        }
      );
    }

 
    ngOnInit(): void {
   this.userService.getUsers().subscribe(
          (data: UserDto[]) => {
            this.dataSource = data;
          },
          (error) => {
            console.error('Error al obtener los usuarios', error);
          }
        );
    }
  
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }
