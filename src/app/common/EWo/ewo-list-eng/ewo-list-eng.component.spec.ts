import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoListEngComponent } from './ewo-list-eng.component';

describe('EwoListEngComponent', () => {
  let component: EwoListEngComponent;
  let fixture: ComponentFixture<EwoListEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwoListEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoListEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
