import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDialogComponent } from './all-dialog.component';

describe('AllDialogComponent', () => {
  let component: AllDialogComponent;
  let fixture: ComponentFixture<AllDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
