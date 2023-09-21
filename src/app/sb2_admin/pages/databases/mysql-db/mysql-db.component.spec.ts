import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlDbComponent } from './mysql-db.component';

describe('MysqlDbComponent', () => {
  let component: MysqlDbComponent;
  let fixture: ComponentFixture<MysqlDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysqlDbComponent]
    });
    fixture = TestBed.createComponent(MysqlDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
