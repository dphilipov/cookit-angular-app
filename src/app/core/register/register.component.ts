import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authServices: AuthServicesService, private router: Router) {

  }

  registerHandler(form: NgForm): void {
    const email: string = form.form.controls.email.value;
    const password: string = form.form.controls.password.value;
    const rePassword: string = form.form.controls.rePassword.value;

    if (password !== rePassword) {
      console.log(`Passowrds Must match`);
    } else {
      this.authServices.registerUser(email, password).then(res => this.router.navigate(["/login"]));      
    }
  }

}
