import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryTreeProblemsComponent } from './binary-tree-problems.component';

describe('BinaryTreeProblemsComponent', () => {
  let component: BinaryTreeProblemsComponent;
  let fixture: ComponentFixture<BinaryTreeProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BinaryTreeProblemsComponent]
    });
    fixture = TestBed.createComponent(BinaryTreeProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
