import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-pop',
  templateUrl: './login-pop.component.html',
  styleUrls: ['./login-pop.component.scss']
})
export class LoginPopComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  login(){
   //dotenv.config();
    window.location.href=`http://localhost:3000/api/auth/google`;

    

  }
}
