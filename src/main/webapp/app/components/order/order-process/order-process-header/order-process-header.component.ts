import { Component } from '@angular/core';

@Component({
  selector: 'app-order-process-header',
  templateUrl: './order-process-header.component.html',
  styleUrls: ['./order-process-header.component.scss']
})
export class OrderProcessHeaderComponent {

  orderNumber : string = 'H1100001';
  createdBy : string = 'NPallapu';
  createdOn : string = '25/10/2023';
  totalPrice : number = 250.45;
  orderStatus : string = 'OPEN';


}
