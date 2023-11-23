import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Cargo, Departamento, UserDto, UserRequest } from '../Models/UserDto';
import { UserService } from '../user.service';
import { CargoService } from '../../cargo/cargo.service';
import { DepartamentoService } from '../../departamento/departamento.service';
 import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
 })
export class CreateUserComponent {
  formAdministrador!:FormGroup;
  departamentos:Departamento[] = [];
  cargos:Cargo[] = [];
  titulo:string = '';
  loading:boolean = false;
 
    constructor(
       public dialogRef: MatDialogRef<CreateUserComponent>,
      // private queryManagement:QueryManagementService,
      private cargoService: CargoService,
      private departamentoService: DepartamentoService,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ){
      this.buildForm();
      this.getDepartamentos();
      this.getCargos();
    }
 
    ngOnInit(): void {
      console.log('data',this.data.data);
      if(this.data.data){
        this.titulo = 'Editar usuario';
        this.pathValueToForm();
      }else{
        this.titulo = 'Registrar usuario';
      }
    }
 
    pathValueToForm(){
      const dataUsuario:UserDto = this.data.data;
      this.formAdministrador.patchValue({
        id:dataUsuario.id,
        usuario: dataUsuario.usuario,
        primerNombre: dataUsuario.primerNombre,
        segundoNombre: dataUsuario.segundoNombre,
        primerApellido: dataUsuario.primerApellido,
        email: dataUsuario.email,
        segundoApellido: dataUsuario.segundoApellido,
        idDepartamento: dataUsuario.idDepartamento,
        idCargo: dataUsuario.idCargo,
      });
    }
 
    buildForm(){
      this.formAdministrador = new FormGroup({
        id: new FormControl(null) ,
        usuario: new FormControl(null, [Validators.required]) ,
        primerNombre: new FormControl(null, [Validators.required]) ,
        segundoNombre: new FormControl(null, [Validators.required]) ,
        primerApellido: new FormControl(null, [Validators.required]) ,
        segundoApellido: new FormControl(null, [Validators.required]) ,
        idDepartamento: new FormControl(null, [Validators.required]) ,
        email: new FormControl(null, [Validators.required]),
        idCargo: new FormControl(null, [Validators.required]),
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
 
 
    update(){
     
      this.dialogRef.close(this.formAdministrador?.value);
    }
 
    create(){
      if(this.formAdministrador.valid){
        this.dialogRef.close(this.formAdministrador?.value);
      }
    }
 
    close(){
      this.dialogRef.close();
    }

}