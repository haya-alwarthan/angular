import { AuthGuardGuard } from './services/auth-guard.guard';
import { PokemonCollectionComponent } from './pokemon-collection/pokemon-collection.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: PokemonsListComponent },
  { path: 'collection', component: PokemonCollectionComponent,canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }