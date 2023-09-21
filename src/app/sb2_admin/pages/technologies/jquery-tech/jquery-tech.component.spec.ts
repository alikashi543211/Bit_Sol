import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryTechComponent } from './jquery-tech.component';

describe('JqueryTechComponent', () => {
  let component: JqueryTechComponent;
  let fixture: ComponentFixture<JqueryTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JqueryTechComponent]
    });
    fixture = TestBed.createComponent(JqueryTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
