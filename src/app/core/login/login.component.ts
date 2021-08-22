import { Component } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthServicesService, private router: Router) {

  }

  loginHandler(form: NgForm): void {
    const email: string = form.form.controls.email.value;
    const password: string = form.form.controls.password.value;

    this.authService.loginUser(email, password)
      .then((res: any) => {       
        localStorage.setItem('user', res.userId)
        this.router.navigate(["/"]);
      })
  }
}