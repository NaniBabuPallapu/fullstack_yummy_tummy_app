import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/main/webapp/app/interfaces/user';
import { AuthService } from 'src/main/webapp/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
 @Output() sideNavToggled = new EventEmitter<boolean>();

 menuStatus: boolean = false;

fetchedUserId: number | undefined;

constructor(private router : Router, private authService : AuthService){

}

ngOnInit(){
  this.fetchedUserId = this.fetchedUserId;
}




 sideNavToggle(){
  this.menuStatus=!this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus);
 }


 logOut(){

  this.authService.logOut();

 }
}
