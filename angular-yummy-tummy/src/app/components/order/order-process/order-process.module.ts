import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderProcessRoutingModule } from './order-process-routing.module';
import { OrderProcessHeaderComponent } from './order-process-header/order-process-header.component';
import { OrderProcessMenuComponent } from './order-process-menu/order-process-menu.component';
import { OrderProcessShippingComponent } from './order-process-shipping/order-process-shipping.component';
import { OrderProcessPaymentComponent } from './order-process-payment/order-process-payment.component';
import { OrderProcessReviewComponent } from './order-process-review/order-process-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderProcessHeaderComponent,
    OrderProcessMenuComponent,
    OrderProcessShippingComponent,
    OrderProcessPaymentComponent,
    OrderProcessReviewComponent
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
