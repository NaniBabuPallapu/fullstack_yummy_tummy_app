import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../constants/app.constants';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = API_BASE_URL;

  


  constructor(private httpClient : HttpClient) { 

  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl+"/"+"users");
  }

  getUserById(id : number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/display-user/${id}`);
  }

  createUser(user : User):Observable<User>{
    return this.httpClient.post<User>(this.baseUrl, user);
  }

  updateUserById( id : number, user : User):Observable<User>{
    return this.httpClient.put<User>(`${this.baseUrl}/update-user/${id}`,user);
  }

  deleteUserById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}delete-user/${id}`);
  }

}
