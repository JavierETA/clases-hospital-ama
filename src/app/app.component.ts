import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import  { PacientesComponent } from './pages/pacientes/pacientes.component'
import { DoctoresComponent } from './pages/doctores/doctores.component';
import { NavComponent } from './modules/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    PacientesComponent, 
    DoctoresComponent,
    RouterLink,
    NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Hospital AMA';
  imagenLogo = 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://almamater.hospital/wp-content/uploads/2026/03/logo-hospital-alma-mater-1-420x148-1.png';
  
  mensaje = "Bienvenido al sistema de gestion de " + this.titulo;
  mostrarMensaje() {
    alert(this.mensaje);
  }
}
