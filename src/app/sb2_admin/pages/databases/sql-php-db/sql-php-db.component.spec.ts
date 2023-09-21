import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlPhpDbComponent } from './sql-php-db.component';

describe('SqlPhpDbComponent', () => {
  let component: SqlPhpDbComponent;
  let fixture: ComponentFixture<SqlPhpDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlPhpDbComponent]
    });
    fixture = TestBed.createComponent(SqlPhpDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
