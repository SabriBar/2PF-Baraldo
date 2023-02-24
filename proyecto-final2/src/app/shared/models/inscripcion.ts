import { Alumno } from "./alumno";
import { Curso } from "./curso";
import { Profesor } from "./profesor";


export interface Inscripcion{
    id: number;
    curso: Curso;
    comision: number;
    alumno: Alumno;
    profesor: Profesor;
}