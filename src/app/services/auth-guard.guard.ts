import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :Observable<boolean> {
      return this.authService.isAuthenticated().pipe(
        map(e=>{
          if(!e)
          {
            this.router.navigate(['browse']);
            return false;
          }
          else 
          return true
          }
        )
      )
 
  }
  
}

// this.authService.authenticate()
// let  flg=  JSON.parse(localStorage.getItem('user')!).loggedIn;
// console.log("flg:  ",flg)
//  if( !flg){
//    window.alert('Access Denied, Login is Required to Access This Page!');
//    this.router.navigate(['browse']);
//  }
//  return true