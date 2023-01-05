import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrocastUserService {
  public collected= new Subject<number[]>;


  constructor() { }

  
}
