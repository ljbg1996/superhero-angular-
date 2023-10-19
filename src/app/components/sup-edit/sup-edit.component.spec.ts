import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupEditComponent } from './sup-edit.component';

describe('SupEditComponent', () => {
  let component: SupEditComponent;
  let fixture: ComponentFixture<SupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupEditComponent]
    });
    fixture = TestBed.createComponent(SupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
