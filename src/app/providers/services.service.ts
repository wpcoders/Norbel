import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient , HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiUrl: any;
  httpOptions : any;
  token : any;
 
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }
  doRegistration (data):Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Authentication/registration`,data).pipe(
       map(response =>{
                    return response;
       }),
   );
 }
 doLogin (data):Observable<any> {
  return this.httpClient.post(`${this.apiUrl}Authentication/login`,data).pipe(
     map(response =>{
                  return response;
     }),
 );
}
 
}
