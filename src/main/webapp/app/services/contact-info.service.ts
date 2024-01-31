import { Injectable } from '@angular/core';
import { API_CONTACT_INFO_URL } from '../constants/app.constants';
import { ContactInfo } from '../interfaces/contact-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  private contactInfoUrl = API_CONTACT_INFO_URL;
  constructor(private httpClient : HttpClient) { }


  saveContactInfo(contactInfo : ContactInfo):Observable<ContactInfo>{
    return this.httpClient.post<ContactInfo>(`${this.contactInfoUrl+'/saveLocation'}`, contactInfo );
  }

  
}
