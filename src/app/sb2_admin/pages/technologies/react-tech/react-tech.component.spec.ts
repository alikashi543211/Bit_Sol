import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTechComponent } from './react-tech.component';

describe('ReactTechComponent', () => {
  let component: ReactTechComponent;
  let fixture: ComponentFixture<ReactTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactTechComponent]
    });
    fixture = TestBed.createComponent(ReactTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
