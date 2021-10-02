import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: any = null;

  constructor(private authService: AuthServicesService, private router: Router) { 

  }

  ngDoCheck(): void {
    if (this.user !== localStorage.getItem('user')) {
      this.user = localStorage.getItem('user');
    }
  }

  handleLogout(): void {
    this.authService.logoutUser();
    localStorage.removeItem('user');
    this.user = null;  
    
    this.router.navigate(["/login"]);
  }
}
