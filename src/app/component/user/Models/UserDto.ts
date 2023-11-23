export interface UserDto {
    id: number;
    usuario: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    idDepartamento: number;
    idCargo: number;
  }
  
  export interface UserRequest {
    usuario: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    idDepartamento: number;
    idCargo: number;
  }
  export interface Cargo {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    idUsuarioCreacion: number;
  }
  
  export interface CargoRequest {
    codigo: string;
    nombre: string;
    activo: boolean;
    idUsuarioCreacion: number;
  }

  export interface Departamento {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    idUsuarioCreacion: number;
  }
  
  export interface DepartamentoRequest {
    codigo: string;
    nombre: string;
    activo: boolean;
    idUsuarioCreacion: number;
  }
  