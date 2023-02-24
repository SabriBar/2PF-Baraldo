import { Profesor } from "./profesor";

export interface Curso{
    nombre: string;
    comision: string;
    imagen: string;
    profesor: Profesor;
    inscripcionAbierta: string;
}