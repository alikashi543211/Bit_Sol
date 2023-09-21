import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTechComponent } from './bootstrap-tech.component';

describe('BootstrapTechComponent', () => {
  let component: BootstrapTechComponent;
  let fixture: ComponentFixture<BootstrapTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapTechComponent]
    });
    fixture = TestBed.createComponent(BootstrapTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
