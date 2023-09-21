import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxTechComponent } from './ajax-tech.component';

describe('AjaxTechComponent', () => {
  let component: AjaxTechComponent;
  let fixture: ComponentFixture<AjaxTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjaxTechComponent]
    });
    fixture = TestBed.createComponent(AjaxTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
