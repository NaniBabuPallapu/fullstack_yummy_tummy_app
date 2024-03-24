import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ORDER_ITEM_BASE_URL } from '../constants/app.constants';
import { OrderItem } from '../interfaces/order-item';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private orderItemUrl = API_ORDER_ITEM_BASE_URL;
  constructor(private httpClient : HttpClient) { 

  }

  saveOrderItemsList(menuList : OrderItem[]) : Observable<OrderItem[]>{
    return this.httpClient.post<OrderItem[]>(`${this.orderItemUrl}/saveOrderItemsList`,menuList).pipe(
      catchError((error) => {
        console.error("Exception Occured while sending OrderItemList "+error);
        return throwError("Exception Occured while sending OrderItem  to API"+error);
      }
      )
    );
  }


  


}
