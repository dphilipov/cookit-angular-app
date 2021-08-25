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
    return appwrite.account.createSession(email, password)
  }

  logoutUser(): void {
    appwrite.account.deleteSession('current');
  }

  getUser() {
    return appwrite.account.get();
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



