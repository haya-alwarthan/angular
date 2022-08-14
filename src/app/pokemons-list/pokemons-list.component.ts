import { MatDialog } from '@angular/material/dialog';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  showFiller = false;
  pokemons: any = [];
  filteredPokemons: any[] = [];
  searchedPokemons: any[] = [];
  abilityColors = new Map<string, string>([]);
  abilityBacks = new Map<string, string>([]);
  breakpoint: number = 4;
  search:string='';
  api_value:any;


  constructor(private dataService: DataService, private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.breakpoint = 4;
    this.getPokemonsPage(0, 8);
    this.getDataApi("haya")

    

  }

  openDialog(pokemon: any) {
    let backgrounds: any[] = [], colors: any[] = [];
    pokemon.types.forEach((element: any) => {
      backgrounds.push(this.abilityBacks.get(element.type.name));
      colors.push(this.abilityColors.get(element.type.name));
    });
    this.dialogRef.open(PokemonDetailComponent, {
      data: { pokemon, backgrounds, colors }, width: '400px', height: '95%'
    });
  }

  filterPokemonList(list: any[]) {
    this.filteredPokemons = list;
    this.searchedPokemons=this.searchedPokemons.filter((element:any)=>list.indexOf(element)!==-1);
    console.log("fire!!!!", list)

  }
  onResize(event: any) {
    console.log("size now>>>>", event.target.innerWidth)
    this.breakpoint = (event.target.innerWidth < 1750) ? event.target.innerWidth / 350 : 4;
  }


  onChangePage(pe:PageEvent) {
    console.log("index: ",pe.pageIndex);
    console.log("size: ",pe.pageSize);
    this.getPokemonsPage(pe.pageIndex*pe.pageSize,pe.pageSize)
  } 

  getPokemonsPage( pageIndex:number,pageSize:number){
    console.log("in function, index=  ",pageIndex,"size = ",pageSize)
    this.pokemons=[];
        this.dataService.getPokemons(pageIndex,pageSize).subscribe(
      (data: any) => {
        if (data.results != undefined) {
          data.results.forEach((element: any) => {
            this.dataService.getPokemonDetails(element.name).subscribe(
              (data) => {
                // console.log(data);
                this.pokemons.push(data);
                data.types.forEach((element: any) => {
                  let col = this.dataService.getRandomColor();
                  this.abilityColors.set(element.type.name, col[1]);
                  this.abilityBacks.set(element.type.name, col[0]);


                });
              }
            );

          });
        }

        this.filteredPokemons= this.searchedPokemons = this.pokemons;
        

      }

    )

  }
  
  updateList(){
    console.log("upadte list>>>>",this.search)
    if(this.search)
    this.searchedPokemons= this.filteredPokemons.filter((element:any)=>element.name.indexOf(this.search) !== -1);
  
  else
  this.searchedPokemons=this.filteredPokemons;
  }

  getDataApi(name:string){
    this.dataService.getDataApi(name).subscribe(res=>{
      console.log("api call arrived: ",res);
     
    }

    )
  }

}
