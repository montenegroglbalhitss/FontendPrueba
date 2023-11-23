import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto, UserRequest } from './Models/UserDto';

const APIURL=environment.Server;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = environment.Server; // Esto asume que tienes una variable 'server' definida en tu archivo environment.ts

  constructor(private http: HttpClient) { }
  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${this.API_URL}/users`);
    // Reemplaza '/users' con la ruta de tu API para obtener usuarios
  }
  getUserById(userId: number): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.API_URL}/users/${userId}`);
  }

  createUser(userRequest: UserRequest): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.API_URL}/users`, userRequest);
  }

  updateUser(userId: number, userRequest: UserRequest): Observable<UserDto> {
    console.log('data',userRequest);
    return this.http.put<UserDto>(`${this.API_URL}/users/${userId}`, userRequest);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/users/${userId}`);
  }
}
