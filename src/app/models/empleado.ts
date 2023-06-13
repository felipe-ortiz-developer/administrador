export class Empleado {
    id: number;
    nombre: string;
    apellido: string;
    cargo: string;
    salario: string;
    caracteristicas: string[]= [];

    constructor(id: number, nombre: string, apellido: string, cargo: string, salario: string, caracteristicas: string[]){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
        this.caracteristicas = caracteristicas;
    }
}