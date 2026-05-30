import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http:HttpClient) { }

  obtenerPacientes() {
    return this.http.get('http://localhost:8080/pacientes')
  }
  eliminarPaciente(id: number){
    return  this.http.delete(`http://localhost:8080/pacientes/${id}`)
  }
}
