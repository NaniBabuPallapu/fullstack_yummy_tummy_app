import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from 'src/main/webapp/app/interfaces/menu';
import { MenuService } from 'src/main/webapp/app/services/menu.service';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.scss']
})
export class MenuDisplayComponent {
  menuItemList! : Menu[];
  currentRouterLink: string | undefined;

  constructor(private router : Router, private menuService : MenuService, private activatedRoute : ActivatedRoute){

  }

  ngOnInit() {
    console.log('MenuComponent initialized');

    this.getMenuItemsList();

    this.currentRouterLink = this.activatedRoute.snapshot.routeConfig?.path;
    
  }
  

  getMenuItemsList() {
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItemList = data
      console.log("fetched menu item list  : " + JSON.stringify(this.menuItemList));
    }
    );
  }

  navigateToCreateItem(){
    this.router.navigate([`menu/create-item`]);
  }
}
