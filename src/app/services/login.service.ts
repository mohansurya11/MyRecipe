import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions:any;
 username:String='';
 usertype:String='';
 token:any='';
 email:any='';
 status:boolean=false;
 currentUrl: string = "";
  constructor(private http:HttpClient,public route: Router) {
      let username=sessionStorage.getItem("username");
      let usertype=sessionStorage.getItem("usertype");
      let token=sessionStorage.getItem("token");
      let email=sessionStorage.getItem("email");
      if(username&&usertype){
        this.status=true;
        this.username=username;
        this.usertype=usertype;
        this.token=token;
        this.email=email;
      }
   }

  getStatus():boolean{
    return this.status;
  }

  // To Register a User
  register(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    return this.http.post("http://localhost:4500/register",obj,this.httpOptions);
  }

  //To check avalailability of mail id and username

  check(str:any):Observable<object>{
    return this.http.get("http://localhost:4500/users?username"+str,this.httpOptions);
  }

// to Login
  login(email:any,password:any):Observable<object>{
 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
  
      })
    }
    return this.http.post("http://localhost:4500/login",
    {email:email,password:password},
    this.httpOptions);
  }

  logout():void{
     this.token="";
     this.username="";
     this.usertype="";
     sessionStorage.removeItem("token");
     sessionStorage.removeItem("username");
     sessionStorage.removeItem("usertype");
     sessionStorage.removeItem("email");
  }

  initRouteService(){
    this.route.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event)=>{
      console.log(event?.url);
      this.currentUrl = event?.url;
    })
  }
}
