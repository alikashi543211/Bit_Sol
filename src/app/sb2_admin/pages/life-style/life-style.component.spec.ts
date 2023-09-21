import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStyleComponent } from './life-style.component';

describe('LifeStyleComponent', () => {
  let component: LifeStyleComponent;
  let fixture: ComponentFixture<LifeStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeStyleComponent]
    });
    fixture = TestBed.createComponent(LifeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
