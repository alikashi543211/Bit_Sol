import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelQueriesDbComponent } from './laravel-queries-db.component';

describe('LaravelQueriesDbComponent', () => {
  let component: LaravelQueriesDbComponent;
  let fixture: ComponentFixture<LaravelQueriesDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaravelQueriesDbComponent]
    });
    fixture = TestBed.createComponent(LaravelQueriesDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
