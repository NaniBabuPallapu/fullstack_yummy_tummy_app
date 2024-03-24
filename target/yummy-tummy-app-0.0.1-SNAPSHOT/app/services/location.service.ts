import { Injectable } from '@angular/core';
import { API_LOCATION_URL } from '../constants/app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locationUrl = API_LOCATION_URL;
  constructor(private httpClient : HttpClient) {

   }

   saveLocation(location : Location):Observable<Location>{
    return this.httpClient.post<Location>(`${API_LOCATION_URL+'/saveLocation'}`, location);
   }
   
}
