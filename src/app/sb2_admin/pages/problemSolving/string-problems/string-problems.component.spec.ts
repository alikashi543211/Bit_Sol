import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringProblemsComponent } from './string-problems.component';

describe('StringProblemsComponent', () => {
  let component: StringProblemsComponent;
  let fixture: ComponentFixture<StringProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringProblemsComponent]
    });
    fixture = TestBed.createComponent(StringProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
