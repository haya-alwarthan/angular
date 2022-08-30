import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pokemons-browse',
  templateUrl: './pokemons-browse.component.html',
  styleUrls: ['./pokemons-browse.component.scss']
})
export class PokemonsBrowseComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    console.log("hello ");
    this.auth.getUser().subscribe(
      res=>
      console.log("jdyhekdhfk",res)

    )

  }

}
