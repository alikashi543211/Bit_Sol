import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsTechComponent } from './rx-js-tech.component';

describe('RxJsTechComponent', () => {
  let component: RxJsTechComponent;
  let fixture: ComponentFixture<RxJsTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxJsTechComponent]
    });
    fixture = TestBed.createComponent(RxJsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
