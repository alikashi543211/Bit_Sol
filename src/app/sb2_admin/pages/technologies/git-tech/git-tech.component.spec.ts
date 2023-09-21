import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTechComponent } from './git-tech.component';

describe('GitTechComponent', () => {
  let component: GitTechComponent;
  let fixture: ComponentFixture<GitTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitTechComponent]
    });
    fixture = TestBed.createComponent(GitTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
