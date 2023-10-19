import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupListComponent } from './sup-list.component';

describe('SupListComponent', () => {
  let component: SupListComponent;
  let fixture: ComponentFixture<SupListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupListComponent]
    });
    fixture = TestBed.createComponent(SupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
