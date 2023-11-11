import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderSearchPageComponent } from './order-search-page/order-search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchOrderComponent } from './search-order/search-order.component';
import { OrderProcessComponent } from './order-process/order-process.component';
import { OrderComponent } from './order.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderSearchPageComponent,
    SearchOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ],
  exports : [

  ]
})
export class OrderModule { }
