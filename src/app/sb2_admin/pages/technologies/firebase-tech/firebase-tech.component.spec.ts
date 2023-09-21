import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseTechComponent } from './firebase-tech.component';

describe('FirebaseTechComponent', () => {
  let component: FirebaseTechComponent;
  let fixture: ComponentFixture<FirebaseTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseTechComponent]
    });
    fixture = TestBed.createComponent(FirebaseTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
