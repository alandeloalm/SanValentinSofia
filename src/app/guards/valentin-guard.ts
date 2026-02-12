import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const valentinGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  const acepto = localStorage.getItem('sanValentinAceptado');

  if (acepto === 'true') {
    return true; 
  } else {
    router.navigate(['/']); 
    return false;
  }
};