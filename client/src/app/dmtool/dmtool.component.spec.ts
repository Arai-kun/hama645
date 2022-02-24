import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtoolComponent } from './dmtool.component';

describe('DmtoolComponent', () => {
  let component: DmtoolComponent;
  let fixture: ComponentFixture<DmtoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
