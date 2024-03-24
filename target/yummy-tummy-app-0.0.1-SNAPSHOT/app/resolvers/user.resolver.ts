import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | null> {
  constructor(private userService : UserService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | null {
    return this.userService.getUser();
  }
}
