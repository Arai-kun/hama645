import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtoolDeleteComponent } from './dmtool-delete.component';

describe('DmtoolDeleteComponent', () => {
  let component: DmtoolDeleteComponent;
  let fixture: ComponentFixture<DmtoolDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtoolDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtoolDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
