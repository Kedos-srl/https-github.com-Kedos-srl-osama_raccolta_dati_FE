import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/_service/auth.service';
import { ApiService } from 'src/app/shared/_services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  
  logout() {
    this.authService.backendLogout({}).subscribe((res: any) => {
		this.authService.logout();
  });
	}

}
