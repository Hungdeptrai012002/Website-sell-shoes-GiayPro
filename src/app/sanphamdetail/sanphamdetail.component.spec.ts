import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamdetailComponent } from './sanphamdetail.component';

describe('SanphamdetailComponent', () => {
  let component: SanphamdetailComponent;
  let fixture: ComponentFixture<SanphamdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanphamdetailComponent]
    });
    fixture = TestBed.createComponent(SanphamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
