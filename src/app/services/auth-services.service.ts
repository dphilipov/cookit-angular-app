import { Injectable } from '@angular/core';
import appwrite from '../config/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() {

  }

  registerUser(email: string, password: string) {
    return appwrite.account.create(email, password);
  }

  loginUser(email: string, password: string) {
    console.log("Great Success");

    return appwrite.account.createSession(email, password)
  }

  getUser(email: string, password: string) {
    appwrite.account.get()
      .then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
  }

  deleteUser(email: string, password: string) {
    appwrite.account.delete()
      .then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
  }
}



