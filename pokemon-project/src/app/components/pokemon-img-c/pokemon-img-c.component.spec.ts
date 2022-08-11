import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonImgCComponent } from './pokemon-img-c.component';

describe('PokemonImgCComponent', () => {
  let component: PokemonImgCComponent;
  let fixture: ComponentFixture<PokemonImgCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonImgCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonImgCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
