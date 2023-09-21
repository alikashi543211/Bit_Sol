import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCodeComponent } from './angular-code.component';

describe('AngularCodeComponent', () => {
  let component: AngularCodeComponent;
  let fixture: ComponentFixture<AngularCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCodeComponent]
    });
    fixture = TestBed.createComponent(AngularCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
