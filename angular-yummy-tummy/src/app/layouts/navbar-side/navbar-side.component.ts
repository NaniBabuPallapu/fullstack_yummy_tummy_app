import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent {

  @Input() sideNavStatus: boolean = false;

  dashboard : string = 'dashboard';
  menu : string = 'menu';
  orders : string = 'orders';
  settings : string = 'settings';
  about : string = 'about';
  contact_us : string = 'contact us';



}
