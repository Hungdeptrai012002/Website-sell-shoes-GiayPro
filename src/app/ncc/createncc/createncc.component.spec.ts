import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenccComponent } from './createncc.component';

describe('CreatenccComponent', () => {
  let component: CreatenccComponent;
  let fixture: ComponentFixture<CreatenccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenccComponent]
    });
    fixture = TestBed.createComponent(CreatenccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
