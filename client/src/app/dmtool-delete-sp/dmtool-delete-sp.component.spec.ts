import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtoolDeleteSpComponent } from './dmtool-delete-sp.component';

describe('DmtoolDeleteSpComponent', () => {
  let component: DmtoolDeleteSpComponent;
  let fixture: ComponentFixture<DmtoolDeleteSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtoolDeleteSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtoolDeleteSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
