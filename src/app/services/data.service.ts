import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { find, flatMap, from, map, of, reduce, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  getPokemonDetails(name:any){
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

  addToCollection(pokemonId:number){
  
    const headers= {'content-type':'application/json'};
    const body = JSON.stringify({user: JSON.parse(localStorage.getItem('user')!),
    pokemon_id: pokemonId
  });
    console.log("at data service", body)
    return this.http.post(`${environment.apiURL}/collection/add`,body,{'headers':headers})
  }



  getCollection(){
   let currentUser = JSON.parse(localStorage.getItem('user') || '{}');
   let id = currentUser!.id ||'';
    return this.http.get(`${environment.apiURL}/collection/`+id)
  }
  isCollected(pokemonId:any,logged:boolean){
    if(logged)
    return this.getCollection().pipe(
  switchMap((arr:any)=>from(arr).pipe(
     find((el:any)=>el.pokemon_id===pokemonId)
  )
   )
  
   )
   else 
   return of(false);
    
   }
}
