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
  fetchedOrderItemListObj : OrderItem[] = [];

  addedOrderItemList : OrderItem[] = [];

  constructor(private menuService:MenuService){

  }
  ngOnInit(){

    this.getMenuItemList();

  }

  getMenuItemList(){
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItemListObj = data;
      this.fetchedOrderItemListObj = JSON.parse(JSON.stringify(this.menuItemListObj));
      // console.log("printing orderItemListObj data on console : "+JSON.stringify(this.fetchedOrderItemListObj));
      // console.log("printing menuItemListObj data on console : "+JSON.stringify(this.menuItemListObj));
    })

  }

  addItemsToOrder(event: {itemObject: OrderItem, quantity: number}){
      console.log("printing OrderItem data on console with quantity  : "+JSON.stringify(event.itemObject) +" selected quantity "+JSON.stringify(event.quantity) );

      const existingItemIndex  =  this.addedOrderItemList.findIndex((item) => item.itemName === event.itemObject.itemName);
      console.log(" existingItemIndex "+existingItemIndex);

        // If the item already exists in the orderItemListObj array
      if(existingItemIndex !== -1){
        // Increment the quantity of the existing item
        this.addedOrderItemList[existingItemIndex].quantity =  event.quantity;

      } else{
        // If the item is not in the orderItemListObj array, create a new item
        const newItem = {...event.itemObject, quantity:event.quantity};

        // Add the new item to the orderItemListObj array
        this.addedOrderItemList.push(newItem);

      }

      console.log('Updated Order Items:', JSON.stringify(this.addedOrderItemList));

  }
  

}
