import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderProcessComponent } from './order-process.component';
import { MenuComponent } from '../../menu/menu.component';
import { OrderProcessShippingComponent } from './order-process-shipping/order-process-shipping.component';
import { OrderProcessMenuComponent } from './order-process-menu/order-process-menu.component';
import { OrderProcessPaymentComponent } from './order-process-payment/order-process-payment.component';
import { OrderProcessReviewComponent } from './order-process-review/order-process-review.component';

const routes: Routes = [

  {
    path : '',
    component : OrderProcessComponent,
    children : [
      {
        path : 'menu',
        component : OrderProcessMenuComponent
      },
      {
        path : 'shipping',
        component : OrderProcessShippingComponent
      },
      {
        path : 'payment',
        component : OrderProcessPaymentComponent
      },
      {
        path : 'review',
        component : OrderProcessReviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderProcessRoutingModule { }
