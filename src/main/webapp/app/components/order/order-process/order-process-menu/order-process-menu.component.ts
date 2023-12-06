import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/main/webapp/app/interfaces/menu';
import { MenuService } from 'src/main/webapp/app/services/menu.service';

@Component({
  selector: 'app-order-process-menu',
  templateUrl: './order-process-menu.component.html',
  styleUrls: ['./order-process-menu.component.scss']
})
export class OrderProcessMenuComponent implements OnInit {

  menuItemListObj! : Menu[];

  constructor(private menuService:MenuService){

  }
  ngOnInit(){

    this.getMenuItemList();

  }

  getMenuItemList(){
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItemListObj = data;
      console.log("printing menu data on console : "+JSON.stringify(this.menuItemListObj));
    })
  }

  

}
