import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderSearchPageComponent } from './order-search-page/order-search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchOrderComponent } from './search-order/search-order.component';


@NgModule({
  declarations: [
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
