import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproComponent } from './createpro.component';

describe('CreateproComponent', () => {
  let component: CreateproComponent;
  let fixture: ComponentFixture<CreateproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateproComponent]
    });
    fixture = TestBed.createComponent(CreateproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
