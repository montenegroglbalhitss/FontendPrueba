export interface UserDto {
    id: number;
    usuario: string;
    email: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    idDepartamento: number;
    idCargo: number;
    cargo:Cargo;
    departamento:Departamento;
  }
  
  export interface UserRequest {
    usuario: string;
    email: string;
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
  