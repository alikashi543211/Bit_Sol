import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceInterviewComponent } from './experience-interview.component';

describe('ExperienceInterviewComponent', () => {
  let component: ExperienceInterviewComponent;
  let fixture: ComponentFixture<ExperienceInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceInterviewComponent]
    });
    fixture = TestBed.createComponent(ExperienceInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
