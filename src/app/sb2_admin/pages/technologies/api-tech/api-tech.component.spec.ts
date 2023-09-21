import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTechComponent } from './api-tech.component';

describe('ApiTechComponent', () => {
  let component: ApiTechComponent;
  let fixture: ComponentFixture<ApiTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTechComponent]
    });
    fixture = TestBed.createComponent(ApiTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
