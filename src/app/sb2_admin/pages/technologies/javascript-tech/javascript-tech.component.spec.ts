import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTechComponent } from './javascript-tech.component';

describe('JavascriptTechComponent', () => {
  let component: JavascriptTechComponent;
  let fixture: ComponentFixture<JavascriptTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptTechComponent]
    });
    fixture = TestBed.createComponent(JavascriptTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
