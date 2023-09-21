import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpComponent } from './php.component';

describe('PhpComponent', () => {
  let component: PhpComponent;
  let fixture: ComponentFixture<PhpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhpComponent]
    });
    fixture = TestBed.createComponent(PhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
