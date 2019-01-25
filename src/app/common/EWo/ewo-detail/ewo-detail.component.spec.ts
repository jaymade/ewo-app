import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoDetailComponent } from './ewo-detail.component';

describe('EwoDetailComponent', () => {
  let component: EwoDetailComponent;
  let fixture: ComponentFixture<EwoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
