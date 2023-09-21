import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHelpComponent } from './job-help.component';

describe('JobHelpComponent', () => {
  let component: JobHelpComponent;
  let fixture: ComponentFixture<JobHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobHelpComponent]
    });
    fixture = TestBed.createComponent(JobHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
