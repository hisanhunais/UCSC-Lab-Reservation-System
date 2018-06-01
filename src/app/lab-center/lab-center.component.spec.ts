import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCenterComponent } from './lab-center.component';

describe('LabCenterComponent', () => {
  let component: LabCenterComponent;
  let fixture: ComponentFixture<LabCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
