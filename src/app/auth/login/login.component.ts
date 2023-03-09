import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    // this.errorMessage = '';
    this.authService.login(this.email, this.password).subscribe((res: any) => {
      if(res.esito === 'OK' && res.result && this.email && this.password){
        this.router.navigate(['/']);
      }
      else if(res.esito ==='OK' && res.result && !this.email && !this.password){
        // this.errorMessage = "credenziali non inserite";
        location.reload;
      }
      else if(res.esito ==='OK' && res.result && this.email && !this.password){
        // this.errorMessage = "inserire la password";
        location.reload;
      }
      else if(res.esito ==='OK' && res.result && !this.email && this.password){
        // this.errorMessage = "inserire l'email";
        location.reload;
      }
      else{
        // this.errorMessage = res.descrizione;
      }
    })
  }

}
