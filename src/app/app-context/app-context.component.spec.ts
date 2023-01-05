import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContextComponent } from './app-context.component';

describe('AppContextComponent', () => {
  let component: AppContextComponent;
  let fixture: ComponentFixture<AppContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
