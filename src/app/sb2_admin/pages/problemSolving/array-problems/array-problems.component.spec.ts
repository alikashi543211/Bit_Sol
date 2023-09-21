import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayProblemsComponent } from './array-problems.component';

describe('ArrayProblemsComponent', () => {
  let component: ArrayProblemsComponent;
  let fixture: ComponentFixture<ArrayProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayProblemsComponent]
    });
    fixture = TestBed.createComponent(ArrayProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
