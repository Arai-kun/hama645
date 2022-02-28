import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtoolRegisterSpComponent } from './dmtool-register-sp.component';

describe('DmtoolRegisterSpComponent', () => {
  let component: DmtoolRegisterSpComponent;
  let fixture: ComponentFixture<DmtoolRegisterSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtoolRegisterSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtoolRegisterSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
