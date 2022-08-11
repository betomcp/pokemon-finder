import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputCComponent } from './name-input-c.component';

describe('NameInputCComponent', () => {
  let component: NameInputCComponent;
  let fixture: ComponentFixture<NameInputCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameInputCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
