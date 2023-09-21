import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sb2FooterComponent } from './sb2-footer.component';

describe('Sb2FooterComponent', () => {
  let component: Sb2FooterComponent;
  let fixture: ComponentFixture<Sb2FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sb2FooterComponent]
    });
    fixture = TestBed.createComponent(Sb2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
