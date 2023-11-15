import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  menuItemList! : Menu[];

  constructor(private router : Router, private menuService : MenuService, private activatedRoute : ActivatedRoute){

  }

  ngOnInit() {
    this.getMenuItemsList();
  }
  

  getMenuItemsList() {
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItemList = data
      console.log("fetched single user based on Id : " + JSON.stringify(this.menuItemList));
    }
    );
  }
}
