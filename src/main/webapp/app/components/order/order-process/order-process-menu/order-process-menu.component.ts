import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Menu } from 'src/main/webapp/app/interfaces/menu';
import { OrderItem } from 'src/main/webapp/app/interfaces/order-item';
import { MenuService } from 'src/main/webapp/app/services/menu.service';

@Component({
  selector: 'app-order-process-menu',
  templateUrl: './order-process-menu.component.html',
  styleUrls: ['./order-process-menu.component.scss']
})
export class OrderProcessMenuComponent implements OnInit {

  menuItemListObj! : Menu[];
  orderItemListObj : OrderItem[] = [];
  orderFormGroup! : FormGroup;

  constructor(private menuService:MenuService, private formBuilder : FormBuilder){

  }
  ngOnInit(){

    this.getMenuItemList();

  }

  getMenuItemList(){
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItemListObj = data;
      this.orderItemListObj = JSON.parse(JSON.stringify(this.menuItemListObj));
      console.log("printing orderItemListObj data on console : "+JSON.stringify(this.orderItemListObj));
      console.log("printing menuItemListObj data on console : "+JSON.stringify(this.menuItemListObj));
    })

  }
  

}
