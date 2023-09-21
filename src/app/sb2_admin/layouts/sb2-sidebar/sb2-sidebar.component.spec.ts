import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sb2SidebarComponent } from './sb2-sidebar.component';

describe('Sb2SidebarComponent', () => {
  let component: Sb2SidebarComponent;
  let fixture: ComponentFixture<Sb2SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sb2SidebarComponent]
    });
    fixture = TestBed.createComponent(Sb2SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
