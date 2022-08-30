import { AuthService } from './../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { LoginPopComponent } from '../login-pop/login-pop.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged!:boolean;
  username:string='';
  private logFlgEvent = new BehaviorSubject<any>(null);
  logFlgEvent$ = this.logFlgEvent.asObservable();

  constructor( private authService:AuthService,
    private iconRef:MatIconRegistry,
     private domSanitizer: DomSanitizer,
     private dialogRef: MatDialog) { 
    //  this.logged = JSON.parse(localStorage.getItem('user')!).loggedIn ? true : false;
     
     
    // this.iconRef.addSvgIcon(`pokeball`,
    // this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/images/pokeball.svg`)
    // )
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(
      f=>{
        if(f){
        this.logged=f;
        this.username= JSON.parse(localStorage.getItem('user')!).username }
      }
    )

   
  }


  popUpLogin(){
    this.dialogRef.open(LoginPopComponent, { width: '300px', height: '300px' });
  }
  logout(){
 window.location.href=`http://localhost:3000/api/logout`;

}
}