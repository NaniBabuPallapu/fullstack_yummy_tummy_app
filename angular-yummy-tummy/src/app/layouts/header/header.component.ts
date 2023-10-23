import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
 @Output() sideNavToggled = new EventEmitter<boolean>();

 menuStatus: boolean = false;

fetchedUserId: number | undefined;


ngOnInit(){
  this.fetchedUserId = this.fetchedUserId;
}




 sideNavToggle(){
  this.menuStatus=!this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus);
 }
}
