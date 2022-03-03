import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviDeleteComponent } from './navi-delete.component';

describe('NaviDeleteComponent', () => {
  let component: NaviDeleteComponent;
  let fixture: ComponentFixture<NaviDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
