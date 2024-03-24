import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  isAuthenticated : boolean = false;

  constructor(private authService : AuthService){

  }

  ngOnInit(){
    // setting user value true or false if user is logged in or logged out simultaneously 
    this.authService.currentUser$.subscribe((user) => {
      console.log("checking user's loggedIn or logging out : "+user+" check "+!!user);
      this.isAuthenticated = !!user;
  });
  }

}
