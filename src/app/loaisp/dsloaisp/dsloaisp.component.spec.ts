import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLoaispComponent } from './dsloaisp.component';

describe('DsLoaispComponent', () => {
  let component: DsLoaispComponent;
  let fixture: ComponentFixture<DsLoaispComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsLoaispComponent]
    });
    fixture = TestBed.createComponent(DsLoaispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
