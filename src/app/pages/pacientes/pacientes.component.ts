import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import pacientesData from "../../../../public/data/pacientes.json"
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  imports: [FormsModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {
    pacientes = pacientesData;
    hayPacientes =  this.pacientes.length > 0;
    mostrarPaciente(paciente: any) {
      alert("El paciente seleccionado es: " + JSON.stringify(paciente));
    }
    nombrePaciente = '';
    direccionPaciente='';
    telefonoPaciente='';
    fechaPaciente='';
    identificacionPaciente = '';
    agregarPaciente(nombre: string){
      if (this.nombrePaciente !== '') {
        this.pacientes.push({
          id: this.pacientes[this.pacientes.length-1].id+1,
          nombre: this.nombrePaciente,
          documento_identidad: this.identificacionPaciente,
          fecha_nacimiento: this.fechaPaciente,
          direccion: this.direccionPaciente,
          telefono: this.telefonoPaciente

        });
        this.nombrePaciente='';
      }
    }
    eliminarPaciente(id: number) {
      this.PacientesService.eliminarPaciente(id).subscribe(() => {
      this.pacientes = this.pacientes.filter(
        paciente => paciente.id !== id
      );
    });}
  
    descargarJSON() {const contenido = JSON.stringify(this.pacientes);
      const blob = new Blob([contenido],{ type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const enlace = document.createElement('a');
      enlace.href = url;
      enlace.download = 'pacientes.json';
      enlace.click();
      window.URL.revokeObjectURL(url);}
      constructor(private PacientesService: PacientesService){

      }
      ngOnInit(){
        this.PacientesService.obtenerPacientes().subscribe(
          (data: any) => {
            this.pacientes = data;
          }
        )
      }
}
