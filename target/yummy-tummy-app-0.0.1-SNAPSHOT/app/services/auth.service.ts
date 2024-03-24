import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;


  fetchedUsersList: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    let storageUser: User | null = null;
    const storageUserAsStr = localStorage.getItem('currentUserData'); // fetching current user details in the form of JSON strng from localStorage.
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr); // parsing from JSON string to a 'User' object

    }
    this.currentUserSubject = new BehaviorSubject<User | null>(storageUser); // This ensures that the currentUserSubject initially holds the user's data if available or null if not.
    this.currentUser$ = this.currentUserSubject.asObservable(); //As a result, the currentUser$ observable emits the new user value, and any components that are subscribed to it will be notified of the change.
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
            localStorage.setItem('currentUserData', JSON.stringify(foundUser)); // converting foundUser User object into Json string format and store it into localStorage.
            this.currentUserSubject.next(foundUser); //  when a user logs in successfully, the currentUserSubject is updated with the foundUser. This is done using currentUserSubject.next(foundUser)
            console.log('User found and logged in successfully: ' + foundUser.id);
            this.isAuthenticated = true;

          } else {
            console.log("User credentials do not match or unable to find user");
            this.isAuthenticated = false;

          }
        } else {
          console.log("No users found.");
          this.isAuthenticated = false;
        }
        localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");
        return this.isAuthenticated;

      })
    );
  }


  logOut() {
    localStorage.removeItem('currentUserData')
    // localStorage.removeItem('isAuthenticated');
    // After logout
    localStorage.setItem('isAuthenticated', 'false');

    this.router.navigate(['/login']);
    location.reload();
  }
}
