import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtoolRegisterComponent } from './dmtool-register.component';

describe('DmtoolRegisterComponent', () => {
  let component: DmtoolRegisterComponent;
  let fixture: ComponentFixture<DmtoolRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtoolRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtoolRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
