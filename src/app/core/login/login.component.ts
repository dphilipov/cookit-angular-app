import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServices: AuthServicesService, private router: Router) {

  }

  ngOnInit(): void {
    this.authServices.loginUser("test@test.bg", "123123").then(res => this.router.navigate(["/"]));
  }
}