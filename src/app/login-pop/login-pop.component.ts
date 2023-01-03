import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-pop',
  templateUrl: './login-pop.component.html',
  styleUrls: ['./login-pop.component.scss']
})
export class LoginPopComponent implements OnInit {
  API_ENDPOINT = environment.apiURL;


  constructor(private http:HttpClient) {
   
   }

  ngOnInit(): void {
  }

  login(){
   //dotenv.config();
    window.location.href=`${this.API_ENDPOINT}/auth/google`;

  }
}
