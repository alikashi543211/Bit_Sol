import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelCodeComponent } from './laravel-code.component';

describe('LaravelCodeComponent', () => {
  let component: LaravelCodeComponent;
  let fixture: ComponentFixture<LaravelCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaravelCodeComponent]
    });
    fixture = TestBed.createComponent(LaravelCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
