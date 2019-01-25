import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoListComponent } from './ewo-list.component';

describe('EwoListComponent', () => {
  let component: EwoListComponent;
  let fixture: ComponentFixture<EwoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
