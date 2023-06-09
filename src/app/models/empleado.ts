export class Empleado {
    id: number;
    nombre: string;
    apellido: string;
    cargo: string;
    salario: string;
    caractetisticas: string[]= [];

    constructor(id: number, nombre: string, apellido: string, cargo: string, salario: string, caractetisticas: string[]){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
        this.caractetisticas = caractetisticas;
    }
}