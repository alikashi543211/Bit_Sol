import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelComponent } from './laravel.component';

describe('LaravelComponent', () => {
  let component: LaravelComponent;
  let fixture: ComponentFixture<LaravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaravelComponent]
    });
    fixture = TestBed.createComponent(LaravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
