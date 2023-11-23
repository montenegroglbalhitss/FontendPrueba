import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento, DepartamentoRequest } from '../user/Models/UserDto';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private readonly API_URL = environment.Server;

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.API_URL}/departamentos`);
  }

  getDepartamentoById(departamentoId: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.API_URL}/departamentos/${departamentoId}`);
  }

  createDepartamento(departamentoRequest: DepartamentoRequest): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.API_URL}/departamentos`, departamentoRequest);
  }

  updateDepartamento(departamentoId: number, departamentoRequest: DepartamentoRequest): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.API_URL}/departamentos/${departamentoId}`, departamentoRequest);
  }

  deleteDepartamento(departamentoId: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/departamentos/${departamentoId}`);
  }
}