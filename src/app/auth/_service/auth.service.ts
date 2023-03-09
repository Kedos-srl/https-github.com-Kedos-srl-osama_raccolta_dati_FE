import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password:string) {
    return this.http.post(environment.apiUrl + 'rest/utente/login', {email, password}).pipe(
      map((res: any) => {
        if (res.esito === 'OK' && res.result) {
          localStorage.setItem('token', res.result.token);
          localStorage.setItem('utente', JSON.stringify(res.result.utente));
        }
        return res;
      })
    );
  }

  backendLogout(backendLogout:any):  Observable<any> {
    return this.http.post(environment.apiUrl + 'rest/utente/logout', backendLogout )
  }

  logout() {
    
    localStorage.clear();
    this.router.navigate(['/auth']);
  }


  
}