import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsBrowseComponent } from './pokemons-browse.component';

describe('PokemonsBrowseComponent', () => {
  let component: PokemonsBrowseComponent;
  let fixture: ComponentFixture<PokemonsBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
