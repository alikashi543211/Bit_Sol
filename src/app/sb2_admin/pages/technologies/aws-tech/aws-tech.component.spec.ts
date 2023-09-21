import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsTechComponent } from './aws-tech.component';

describe('AwsTechComponent', () => {
  let component: AwsTechComponent;
  let fixture: ComponentFixture<AwsTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsTechComponent]
    });
    fixture = TestBed.createComponent(AwsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
