import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/main/webapp/app/interfaces/menu';
import { OrderItem } from 'src/main/webapp/app/interfaces/order-item';
import { MenuService } from 'src/main/webapp/app/services/menu.service';
import { OrderItemService } from 'src/main/webapp/app/services/order-item.service';

@Component({
  selector: 'app-order-process-menu',
  templateUrl: './order-process-menu.component.html',
  styleUrls: ['./order-process-menu.component.scss']
})
export class OrderProcessMenuComponent implements OnInit {

  menuItemListObj!: Menu[];
  fetchedOrderItemListObj: OrderItem[] = [];

  addedOrderItemsList: OrderItem[] = [];

  itemsCounting : number = 0;

  constructor(private menuService: MenuService, private orderItemService: OrderItemService, private router: Router) {

  }
  ngOnInit() {

    this.getMenuItemList();

  }

  getMenuItemList() {
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItemListObj = data;
      this.fetchedOrderItemListObj = JSON.parse(JSON.stringify(this.menuItemListObj));
      // console.log("printing orderItemListObj data on console : "+JSON.stringify(this.fetchedOrderItemListObj));
      // console.log("printing menuItemListObj data on console : "+JSON.stringify(this.menuItemListObj));
    })

  }


  addingFetchedItemsToOrder(event: { itemObject: OrderItem, quantity: number }) {


    const existingItemIndex = this.addedOrderItemsList.findIndex((item) => item.itemName === event.itemObject.itemName);

    // If the item already exists in the addedOrderItemsList array
    if (existingItemIndex !== -1) {

      // Increment the quantity of the existing item
      this.addedOrderItemsList[existingItemIndex].quantity = event.quantity;
      console.log("updated item-quantity for existing item  Existing OrderItem : {}", JSON.stringify(this.addedOrderItemsList[existingItemIndex]));

    } else {

      // If the item is not in the addedOrderItemsList array, create a new item
      const newItem = { ...event.itemObject, quantity: event.quantity };

      // Add the new item to the addedOrderItemsList array
      this.addedOrderItemsList.push(newItem);
      console.log(" pushing new item  into ListOfOrderItem New OrderItem: {}", JSON.stringify(newItem));

    }

    console.log("total items that are added to order addedOrderItemsList: {}", JSON.stringify(this.addedOrderItemsList));
    

  }

  saveOrderItemsListForOrder() {
    this.orderItemService.saveOrderItemsList(this.addedOrderItemsList).subscribe((data) => {
      console.log("unable to send the addedOrderItemsList to service method " + JSON.stringify(data));

    })

    this.reloadPage();

  }

  // this method is used to reload the page
  reloadPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });

  }

  countingItems(){
    
    const previous  = this.itemsCounting;
    this.addedOrderItemsList.forEach(count => {
      this.itemsCounting =  previous+Number(count.quantity);
    }
    )    
  }

}
