import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhumanComponent } from './superhuman.component';

describe('SuperhumanComponent', () => {
  let component: SuperhumanComponent;
  let fixture: ComponentFixture<SuperhumanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperhumanComponent]
    });
    fixture = TestBed.createComponent(SuperhumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
