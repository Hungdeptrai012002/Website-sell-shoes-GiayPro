import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssanphamComponent } from './dssanpham.component';

describe('DssanphamComponent', () => {
  let component: DssanphamComponent;
  let fixture: ComponentFixture<DssanphamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssanphamComponent]
    });
    fixture = TestBed.createComponent(DssanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
