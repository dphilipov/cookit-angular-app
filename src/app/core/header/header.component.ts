import { Component } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: any = null;

  constructor(private authService: AuthServicesService) { 

  }

  ngDoCheck() {
    if (this.user !== localStorage.getItem('user')) {
      this.user = localStorage.getItem('user');
      console.log(this.user); 
    }
  }

  handleLogout(): void {
    this.authService.logoutUser();
    localStorage.removeItem('user');
    this.user = null;
    console.log(this.user);
    
  }
}
