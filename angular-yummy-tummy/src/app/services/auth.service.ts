import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../interfaces/user';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;



  fetchedUsersList: User[] = [];

  constructor(private userService: UserService, private router: Router) {

  }

  logIn(logInName: string, password: string): Observable<boolean> {
    return this.userService.getAllUsers().pipe(
      catchError((error) => {
        console.log("Error while fetching users list: " + error);
        return throwError("Exception Occurred while fetching UserList: " + error);
      }),

      map((data: User[]) => {
        this.fetchedUsersList = data;

        if (this.fetchedUsersList !== null && this.fetchedUsersList.length > 0) {
          const foundUser = this.fetchedUsersList.find((user) => user.loginName === logInName && user.password === password);
          
          if (foundUser) {
            console.log('User found and logged in successfully: ' + foundUser.id);
            this.isAuthenticated = true;
            this.userService.setUser(foundUser);

          } else {
            console.log("User credentials do not match or unable to find user");
            this.isAuthenticated = false;
            this.userService.setUser(null);

          }
        } else {
          console.log("No users found.");
          this.isAuthenticated = false;
        }
        localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" :"false");
        return this.isAuthenticated;

      })
    );
  }


  logOut() {
    this.isAuthenticated = false;
  }

  authenticatedUser(){
    return this.isAuthenticated;
  }
}
