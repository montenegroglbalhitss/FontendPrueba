import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo, CargoRequest } from '../user/Models/UserDto';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

 
    private readonly API_URL = environment.Server;
  
    constructor(private http: HttpClient) { }
  
    getCargos(): Observable<Cargo[]> {
      return this.http.get<Cargo[]>(`${this.API_URL}/cargos`);
    }
  
    getCargoById(cargoId: number): Observable<Cargo> {
      return this.http.get<Cargo>(`${this.API_URL}/cargos/${cargoId}`);
    }
  
    createCargo(cargoRequest: CargoRequest): Observable<Cargo> {
      return this.http.post<Cargo>(`${this.API_URL}/cargos`, cargoRequest);
    }
  
    updateCargo(cargoId: number, cargoRequest: CargoRequest): Observable<Cargo> {
      return this.http.put<Cargo>(`${this.API_URL}/cargos/${cargoId}`, cargoRequest);
    }
  
    deleteCargo(cargoId: number): Observable<any> {
      return this.http.delete<any>(`${this.API_URL}/cargos/${cargoId}`);
    }
  }
  