import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitSolComponent } from './bit-sol.component';

describe('BitSolComponent', () => {
  let component: BitSolComponent;
  let fixture: ComponentFixture<BitSolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitSolComponent]
    });
    fixture = TestBed.createComponent(BitSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
