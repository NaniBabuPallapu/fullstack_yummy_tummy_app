import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../constants/app.constants';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = API_BASE_URL;

  private user: User | null = null;



  constructor(private httpClient: HttpClient, private router: Router) {

  }

  setUser(user: User | null): void {
    // const tempuser =  localStorage.getItem('currentUserData');
    // user = tempuser ? JSON.parse(tempuser) : null;

    this.user = user;
  }

  getUser(): User | null {
    const tempuser =  localStorage.getItem('currentUserData');
    this.user = tempuser ? JSON.parse(tempuser) : null; // parsing from JSON string to a 'User' object
  
    return this.user;
  }


  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "/" + "users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/display-user/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + "/create-user", user);
  }

  updateUserById(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/update-user/${id}`, user);
  }

  deleteUserById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete-user/${id}`);
  }

}
