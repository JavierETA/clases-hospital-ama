import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  titulo="Hospital AMA";
  imagenLogo = 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://almamater.hospital/wp-content/uploads/2026/03/logo-hospital-alma-mater-1-420x148-1.png';
  
}
