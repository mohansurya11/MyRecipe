import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpOptions:any;
  constructor(private http:HttpClient) { }


  getContacts():Observable<any> {
    return this.http.get("http://localhost:4500/contacts")
  }
  postContact(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': "Bearer"+localStorage.getItem("token")
    })

  return this.http.post("http://localhost:4500/contacts",obj,this.httpOptions);
 }
}
