import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTechComponent } from './typescript-tech.component';

describe('TypescriptTechComponent', () => {
  let component: TypescriptTechComponent;
  let fixture: ComponentFixture<TypescriptTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypescriptTechComponent]
    });
    fixture = TestBed.createComponent(TypescriptTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
