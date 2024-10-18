import { Routes } from '@angular/router';
// import { HwComponent } from './hw/hw.component';
// import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
        //component: HomeComponent
    },
    {
        path: 'hello',
        loadComponent: () => import('./hw/hw.component').then(m => m.HwComponent),
        data: { preload: true }
    },
    {
        path: 'hola',
        loadComponent: () => import('./hola-mundo/hola-mundo.component').then(m => m.HolaMundoComponent),
        //data: { preload: true }
    }
];
