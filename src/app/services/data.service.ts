import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient

  ) { }

  getPokemons(offset:number,limit:number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit='+limit+"&offset="+offset);
  }

  getPokemonDetails(name:string){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+name);
  }

  getDataApi(name:string){
    return this.http.get('/api/getData');
  }

  getRandomColor(){
    let x= Math.random()*360;
    let color= ["hsl("+x+",100%,75%)","hsl("+x+",100%,20%)", "#"+Math.floor(Math.random()*16777215).toString(16)];
    return color;
  }


}
