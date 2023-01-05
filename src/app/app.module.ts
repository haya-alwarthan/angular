import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginPopComponent } from './login-pop/login-pop.component';
import { PokemonCollectionComponent } from './pokemon-collection/pokemon-collection.component';
import { PokemonsBrowseComponent } from './pokemons-browse/pokemons-browse.component';
import { AppContextComponent } from './app-context/app-context.component';
import { BrocastUserService } from './services/brocast-user.service';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonsListComponent,
    PokemonDetailComponent,
    SidenavComponent,
    LoginPopComponent,
    PokemonCollectionComponent,
    PokemonsBrowseComponent,
    AppContextComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSidenavModule,
    NgSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [BrocastUserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
