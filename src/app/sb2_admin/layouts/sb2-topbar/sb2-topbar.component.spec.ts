import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sb2TopbarComponent } from './sb2-topbar.component';

describe('Sb2TopbarComponent', () => {
  let component: Sb2TopbarComponent;
  let fixture: ComponentFixture<Sb2TopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sb2TopbarComponent]
    });
    fixture = TestBed.createComponent(Sb2TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
