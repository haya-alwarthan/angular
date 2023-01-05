import { DataService } from './../services/data.service';
import { AfterViewInit, Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit , AfterViewInit{
  pokemon:any ;
  typeColors:any[];
  typeBacks:any[];
 abilityColors:any[]=[];
  percentages:number[]=new Array(4).fill(0);
  util:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,dataService:DataService)  { 
    this.pokemon=data.pokemon;
    this.typeBacks=data.backgrounds;
    this.typeColors=data.colors;
    this.pokemon.abilities.forEach((element: any) => {
      let col=dataService.getRandomColor()[2];
      this.abilityColors.push(col);
      
    });
  }
  ngAfterViewInit(): void {
    var interval = setInterval( () => {
      this.percentages.forEach((element,index) => {
        let stat = this.filterStats(this.pokemon.stats)[index].base_stat;
        this.percentages[index]+=stat/10;
        if(element>=stat)
        clearInterval(interval);
      }); }, 100);
  }

  ngOnInit(): void {
  }
    filterStats(stats:any[]){
    return stats.filter((st) =>
     st.stat.name!='special-attack' && st.stat.name!='special-defense'
      );

  }

}
