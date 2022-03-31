import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetweetMultiregisterComponent } from './retweet-multiregister.component';

describe('RetweetMultiregisterComponent', () => {
  let component: RetweetMultiregisterComponent;
  let fixture: ComponentFixture<RetweetMultiregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetweetMultiregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetweetMultiregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
