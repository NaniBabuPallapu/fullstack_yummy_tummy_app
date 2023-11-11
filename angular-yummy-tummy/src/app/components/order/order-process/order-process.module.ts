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


@NgModule({
  declarations: [
      OrderProcessComponent,
      OrderProcessHeaderComponent,
      OrderProcessMenuComponent,
      OrderProcessPaymentComponent,
      OrderProcessReviewComponent,
      OrderProcessShippingComponent,
      
  ],
  imports: [
    CommonModule,
    OrderProcessRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderProcessModule {
  
 }
