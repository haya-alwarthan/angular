import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'dotenv'; 
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   flag = new Subject<boolean>();
  constructor(private http:HttpClient) { 
       
  }
  getUser(){
    return this.http.get(`${environment.apiURL}/account`,{withCredentials:true})
  }


    isAuthenticated():  Observable<boolean>{
      var subject = new Subject<boolean>();  
      var logged:boolean= false;
    this.getUser().subscribe(
      (res)=>{
          console.log("res: ",res)
          localStorage.setItem('user', JSON.stringify(res))
          logged = JSON.parse(localStorage.getItem('user')!).loggedIn ? true : false;
          subject.next(logged);
      } 
    )
    return subject.asObservable();
  }

  logout(){
     this.http.get(`${environment.apiURL}/logout`,{withCredentials:true}).subscribe(
      res=>{
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
     )


  }



}
