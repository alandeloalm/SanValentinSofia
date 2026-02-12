import { Routes } from '@angular/router';
import { Portada } from './components/portada/portada';
import { Timeline } from './components/timeline/timeline';
import { valentinGuard } from './guards/valentin-guard';

export const routes: Routes = [
  { path: '', component: Portada },
  { 
    path: 'timeline', 
    component: Timeline, 
    canActivate: [valentinGuard] 
  },
  { path: '**', redirectTo: '' } 
];