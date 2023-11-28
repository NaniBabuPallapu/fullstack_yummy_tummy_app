import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_MENU_BASE_URL } from '../constants/app.constants';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuBaseUrl = API_MENU_BASE_URL;

  constructor(private httpClient : HttpClient, private router : Router) {

   }


   getMenuItems():Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.menuBaseUrl}/get-menu-items`).pipe(
      catchError((error) =>{
        console.error("Error while fetching menuItemList",error);
        return throwError("Exception occured while fetching menuItemList"+error);
      })
    );
   }

   saveMenuSingleItem(menu : Menu) : Observable<Menu>{
    return this.httpClient.post<Menu>(`${this.menuBaseUrl}/save-item`, menu).pipe(
      catchError((error) => {
        console.error("Error while sending product to API ");
        return throwError("Exception Occured while sending menu item to API");
      })
    )
   }

}
