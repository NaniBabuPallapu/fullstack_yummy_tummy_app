import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let currentUrl: string = state.url;

    return this.checkUrlPath(currentUrl);
  }

  checkUrlPath(currentUrl: string): true | UrlTree {
    try {
      console.log("current Url Path : " + currentUrl);

      let storedValue = localStorage.getItem('isAuthenticated');

      if (storedValue !== null && storedValue === "true") {
        if (currentUrl === '/login') {
          this.router.navigate(['/dashboard']);
          return true; // Return true if the user is logged in and navigates to '/login'.
        } else {
          return true; // Return true if the user is logged in and navigates to any other URL.
        }
      } else {
        console.log("User is not found, try again");
        return this.router.parseUrl('/login'); // Redirect to '/login' if the user is not logged in.
      }

    } catch (error) {
      console.error(error);
      return this.router.parseUrl('/login'); // Redirect to '/login' in case of an error.
    }
  }







  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   let storedValue = localStorage.getItem('isAuthenticated');

  //   try {
  //     if(this.authService.authenticatedUser()){
  //        return true;
  //      } else{
  //        this.router.navigate(['/login']);
  //        console.log("User is not found, try again");
  //        return false;
  //      }
  //   } catch (error) {
  //     console.error(error);
  //     return this.router.parseUrl('/login'); 
  //   }

  // }

}
