import { Routes } from '@angular/router';
import { Verify } from './pages/verify/verify';
import { Valentine } from './pages/valentine/valentine';

export const routes: Routes = [
  { path: '', redirectTo: 'verify', pathMatch: 'full' },
  { path: 'verify', component: Verify },
  { path: 'valentine', component: Valentine },
  { path: '**', redirectTo: 'verify' }
];