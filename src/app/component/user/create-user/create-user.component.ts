import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRequest } from '../Models/UserDto';
import { UserService } from '../user.service';
import { CargoService } from '../../cargo/cargo.service';
import { DepartamentoService } from '../../departamento/departamento.service';
 import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
 })
export class CreateUserComponent {
cancelCreation() {
throw new Error('Method not implemented.');
}
standalone:boolean= true;

createUserForm: FormGroup;
cargos: any[] = [];
departamentos: any[] = [];
  constructor(private fb: FormBuilder, private userService: UserService,
    private cargoService: CargoService,
    private departamentoService: DepartamentoService
    ) {
    this.createUserForm = this.fb.group({
      usuario: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      idDepartamento: ['', Validators.required],
      idCargo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargoService.getCargos().subscribe((cargos: any[]) => {
      this.cargos = cargos; // Actualiza la lista de cargos
    });

    this.departamentoService.getDepartamentos().subscribe((departamentos: any[]) => {
      this.departamentos = departamentos; // Actualiza la lista de departamentos
    });
  }

  onSubmit(): void {
    if (this.createUserForm.valid) {
      const userData: UserRequest = this.createUserForm.value as UserRequest;
      this.userService.createUser(userData).subscribe(
        (response) => {
          console.log('Usuario creado:', response);
          // Aquí puedes manejar la lógica después de crear el usuario (por ejemplo, redireccionar)
        },
        (error) => {
          console.error('Error al crear el usuario', error);
          // Aquí puedes manejar el error de creación de usuario
        }
      );
    } else {
      console.error('Formulario inválido');
      // Aquí puedes manejar el caso cuando el formulario no es válido
    }
  }


  
}