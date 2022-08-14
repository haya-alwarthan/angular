import { Pokemon } from './../pokemon-detail/pokemon';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit,OnChanges {
  @Input() pokemons:any[]=[];
  @Output() filteredPokemons = new EventEmitter<any[]>();
  abilities:any[]=[];
  selectedAbilities:any[] = [];

  constructor() {

   }
  ngOnChanges(changes: SimpleChanges): void {
   
    this.pokemons=changes['pokemons'].currentValue;
    let set= new Set<any>();
    
      console.log("current:   ",this.pokemons)
      
      setTimeout(() => {
        this.abilities= this.pokemons.map(x=>
          x.abilities.forEach((element: any) => {
            set.add(element.ability.name);
          }));     
        this.abilities=Array.from(set)
        console.log("sec",this.selectedAbilities)
      }, 1000);
    

      
      
    
    
      
    
  }

  ngOnInit(): void {
  }

  filterPokemons(){
    // return the pokemon if one of its abilities exisits on selectedAbilities
  this.filteredPokemons.emit( this.pokemons.filter((element)=>{
   return this.inAbilities(element)
  }
   
   ))
    }
    resetFilters(){
      this.selectedAbilities=[];
      this.filteredPokemons.emit( this.pokemons)
    }
    inAbilities(pokemon:any){
      if(this.selectedAbilities.length>0)
      return pokemon.abilities.some((abl:any) => (this.selectedAbilities.indexOf(abl.ability.name) !== -1));
    else
    return this.pokemons
    }
 
      
     
    
       
    
    

  

}
