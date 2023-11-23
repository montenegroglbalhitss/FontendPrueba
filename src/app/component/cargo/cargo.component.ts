import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CargoService } from './cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.sass']
})
export class CargoComponent {
  cargosForm: FormGroup;
  cargos: any[] = []; // Puedes tipar esto con tu interfaz Cargo si lo deseas

  constructor(private fb: FormBuilder, private cargoService: CargoService) {
    this.cargosForm = this.fb.group({
      selectedCargo: [''] // Esto representa el campo para seleccionar el cargo
    });
  }

  ngOnInit(): void {
    this.cargoService.getCargos().subscribe(
      (data) => {
        this.cargos = data; // Aquí obtenemos los cargos del servicio
      },
      (error) => {
        console.error('Error al obtener los cargos', error);
      }
    );
  }
}