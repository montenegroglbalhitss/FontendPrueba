import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Departamento } from '../user/Models/UserDto';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.sass']
})
export class DepartamentoComponent {

  departamentosForm: FormGroup;
  departamentos: Departamento[] = [];

  constructor(private fb: FormBuilder, private departamentoService: DepartamentoService) {
    this.departamentosForm = this.fb.group({
      selectedDepartamento: ['']
    });
  }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(
      (data) => {
        this.departamentos = data;
      },
      (error) => {
        console.error('Error al obtener los departamentos', error);
      }
    );
  }
}