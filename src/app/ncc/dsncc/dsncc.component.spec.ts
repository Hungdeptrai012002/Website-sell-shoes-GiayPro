import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsnccComponent } from './dsncc.component';

describe('DsnccComponent', () => {
  let component: DsnccComponent;
  let fixture: ComponentFixture<DsnccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsnccComponent]
    });
    fixture = TestBed.createComponent(DsnccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
