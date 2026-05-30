import { Routes } from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { DoctoresComponent } from './pages/doctores/doctores.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CitasComponent } from './pages/citas/citas.component';

export const routes: Routes = [
    {
        path:  'pacientes',
        component: PacientesComponent
    },
    {
        path: 'doctores',
        component: DoctoresComponent
    },
    {
        path: 'servicios',
        component: ServiciosComponent
    },
    {
        path: 'citas',
        component: CitasComponent
    }
];
