import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixProblemsComponent } from './matrix-problems.component';

describe('MatrixProblemsComponent', () => {
  let component: MatrixProblemsComponent;
  let fixture: ComponentFixture<MatrixProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrixProblemsComponent]
    });
    fixture = TestBed.createComponent(MatrixProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
