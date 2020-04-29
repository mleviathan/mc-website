import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavelementComponent } from './navelement.component';

describe('NavelementComponent', () => {
  let component: NavelementComponent;
  let fixture: ComponentFixture<NavelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
