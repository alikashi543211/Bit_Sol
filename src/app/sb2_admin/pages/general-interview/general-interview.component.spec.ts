import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInterviewComponent } from './general-interview.component';

describe('GeneralInterviewComponent', () => {
  let component: GeneralInterviewComponent;
  let fixture: ComponentFixture<GeneralInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInterviewComponent]
    });
    fixture = TestBed.createComponent(GeneralInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
