import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalInterviewComponent } from './final-interview.component';

describe('FinalInterviewComponent', () => {
  let component: FinalInterviewComponent;
  let fixture: ComponentFixture<FinalInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalInterviewComponent]
    });
    fixture = TestBed.createComponent(FinalInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
