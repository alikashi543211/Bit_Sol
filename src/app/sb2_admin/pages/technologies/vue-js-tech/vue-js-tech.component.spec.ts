import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueJsTechComponent } from './vue-js-tech.component';

describe('VueJsTechComponent', () => {
  let component: VueJsTechComponent;
  let fixture: ComponentFixture<VueJsTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueJsTechComponent]
    });
    fixture = TestBed.createComponent(VueJsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
