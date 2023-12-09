import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Menu } from 'src/main/webapp/app/interfaces/menu';
import { OrderItem } from 'src/main/webapp/app/interfaces/order-item';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() itemObject! : OrderItem;
  orderItemFormGroup! : FormGroup;

  @Output() addSelectedItemToOrder : EventEmitter<{itemObject : OrderItem, quantity : number}> = new EventEmitter();


  constructor(private formBuilder : FormBuilder){

  }

  ngOnInit(){

    this.orderItemFormGroup = this.formBuilder.group({
      quantity : 0
    });

  }

  startAddingItemsToOrder(){
    this.incrementQuantity();
    this.addItemToOrder();

  }

  
  incrementQuantity(){

    const currentQuantity = this.orderItemFormGroup.get('quantity')!.value;
    this.orderItemFormGroup.patchValue({
      quantity : currentQuantity+1
    });

    this.addItemToOrder();

  }

  decrementQuantity(){

    const currentQuantity = this.orderItemFormGroup.get('quantity')!.value;
    if(currentQuantity > 0){
      this.orderItemFormGroup.patchValue({
        quantity : currentQuantity-1
      });
    }

    this.addItemToOrder();

  }

private addItemToOrder(){
  const currentQuantity = this.orderItemFormGroup.get('quantity')!.value;
  this.addSelectedItemToOrder.emit({itemObject: this.itemObject, quantity : currentQuantity});
  console.log("adding selected item and quantity to Order  OrderItem : {}, quantity : {} ", JSON.stringify(this.itemObject), currentQuantity);
}

}
