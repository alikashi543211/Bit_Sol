import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodignitorTechComponent } from './codignitor-tech.component';

describe('CodignitorTechComponent', () => {
  let component: CodignitorTechComponent;
  let fixture: ComponentFixture<CodignitorTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodignitorTechComponent]
    });
    fixture = TestBed.createComponent(CodignitorTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
