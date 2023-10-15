import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent {

  @Input() sideNavStatus: boolean = false;

  navSideBarList = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-grip-vertical fa-rotate-90'
    },
    {
      number: '2',
      name: 'menu',
      // icon : 'fa-solid fa-bowl-food'
      icon: 'fa-solid fa-clipboard-list '
    },
    {
      number: '3',
      name: 'orders',
      icon: 'fa-solid fa-bag-shopping '
    }, {
      number: '4',
      name: 'settings',
      icon: 'fa-solid fa-gear '
    },
    {
      number: '5',
      name: 'about',
      icon: 'fa-solid fa-circle-info '
    },
    {
      number: '6',
      name: 'contact us',
      icon: 'fa-solid fa-phone '
    }
  ];



}
