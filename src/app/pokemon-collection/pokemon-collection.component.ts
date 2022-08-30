import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BrocastUserService } from '../services/brocast-user.service';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss']
})
export class PokemonCollectionComponent implements OnInit {
  collectionList:any[]=[]
  abilityColors = new Map<string, string>([]);
  abilityBacks = new Map<string, string>([]);
  breakpoint:number;

  constructor(private dataService:DataService,private broadCast:BrocastUserService) { 
    this.breakpoint=4
  }

  ngOnInit(): void {
    this.dataService.getCollection().subscribe(
      (res:any)=>{
      console.log("response in collection >>>>",res)
      res.forEach((e:any) => {
        this.dataService.getPokemonDetails(e.pokemon_id).subscribe(
          (data)=>{
            this.broadCast.collected.next(data);
            this.collectionList.push(data);
                data.types.forEach((element: any) => {
                  let col = this.dataService.getRandomColor();
                  this.abilityColors.set(element.type.name, col[1]);
                  this.abilityBacks.set(element.type.name, col[0]);
          }
                );
        }



        )
      });
      
     

      }


    )

    // this.auth.getUser().subscribe(
    //   res=>
    //   console.log(res)

    // )

  }
  onResize(event: any) {
    console.log("size now>>>>", event.target.innerWidth)
    this.breakpoint = (event.target.innerWidth < 1750) ? event.target.innerWidth / 350 : 4;
  }

}
