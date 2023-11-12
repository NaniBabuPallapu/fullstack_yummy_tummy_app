import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderProcessRoutingModule } from './order-process-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProcessHeaderComponent } from './order-process-header/order-process-header.component';
import { OrderProcessMenuComponent } from './order-process-menu/order-process-menu.component';
import { OrderProcessPaymentComponent } from './order-process-payment/order-process-payment.component';
import { OrderProcessReviewComponent } from './order-process-review/order-process-review.component';
import { OrderProcessShippingComponent } from './order-process-shipping/order-process-shipping.component';
import { OrderProcessComponent } from './order-process.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatMenuModule} from '@angular/material/menu';
import { SearchOrderComponent } from '../search-order/search-order.component';
import { OrderItemComponent } from './order-process-menu/order-item/order-item.component';



@NgModule({
  declarations: [
      OrderProcessComponent,
      OrderProcessHeaderComponent,
      OrderProcessMenuComponent,
      OrderProcessPaymentComponent,
      OrderProcessReviewComponent,
      OrderProcessShippingComponent,
      OrderItemComponent
      
  ],
  imports: [
    CommonModule,
    OrderProcessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatMenuModule
  
  ]
})
export class OrderProcessModule {
  
 }
