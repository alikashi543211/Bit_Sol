import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListProblemComponent } from './linked-list-problem.component';

describe('LinkedListProblemComponent', () => {
  let component: LinkedListProblemComponent;
  let fixture: ComponentFixture<LinkedListProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedListProblemComponent]
    });
    fixture = TestBed.createComponent(LinkedListProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
