import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderSearchPageComponent } from './order-search-page/order-search-page.component';

const routes: Routes = [
  {
    path : '',
    component : OrderComponent,
    children : [
      {
        path : 'search',
        component : OrderSearchPageComponent
      },
      
      {
        path : ':orderId',
        loadChildren : () => import('./order-process/order-process.module').then(m => m.OrderProcessModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
