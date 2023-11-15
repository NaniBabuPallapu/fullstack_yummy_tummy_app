import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent implements OnInit{

  @Input() menuItemObj! : Menu;

  constructor(){

  }
  ngOnInit() {
    
  }

  
}
