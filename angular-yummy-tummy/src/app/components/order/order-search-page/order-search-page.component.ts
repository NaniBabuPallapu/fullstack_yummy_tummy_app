import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-search-page',
  templateUrl: './order-search-page.component.html',
  styleUrls: ['./order-search-page.component.scss']
})
export class OrderSearchPageComponent  implements OnInit{
  resourceId : number = 1001;

  constructor(private router : Router){

  }

  ngOnInit() {
    
  }

  navigateToCreateOrder(){
    this.router.navigate([`order/${this.resourceId}/menu`])
  }
}
