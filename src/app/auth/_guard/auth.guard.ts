import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // Qui il codice per controllare che l' utente sia loggato
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;;
  }
}