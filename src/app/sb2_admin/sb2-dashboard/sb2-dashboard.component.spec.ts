import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sb2DashboardComponent } from './sb2-dashboard.component';

describe('Sb2DashboardComponent', () => {
  let component: Sb2DashboardComponent;
  let fixture: ComponentFixture<Sb2DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sb2DashboardComponent]
    });
    fixture = TestBed.createComponent(Sb2DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
