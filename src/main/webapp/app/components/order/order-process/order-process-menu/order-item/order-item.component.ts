import { Component, Input } from '@angular/core';
import { Menu } from 'src/main/webapp/app/interfaces/menu';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent {
  @Input() itemObject! : Menu
}
