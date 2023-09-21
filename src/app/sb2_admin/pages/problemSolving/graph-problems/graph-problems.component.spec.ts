import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphProblemsComponent } from './graph-problems.component';

describe('GraphProblemsComponent', () => {
  let component: GraphProblemsComponent;
  let fixture: ComponentFixture<GraphProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphProblemsComponent]
    });
    fixture = TestBed.createComponent(GraphProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
