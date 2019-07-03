import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCardInfosComponent } from './monster-card-infos.component';

describe('MonsterCardInfosComponent', () => {
  let component: MonsterCardInfosComponent;
  let fixture: ComponentFixture<MonsterCardInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterCardInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterCardInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
