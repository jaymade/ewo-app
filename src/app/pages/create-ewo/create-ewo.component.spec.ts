import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEwoComponent } from './create-ewo.component';

describe('CreateEwoComponent', () => {
  let component: CreateEwoComponent;
  let fixture: ComponentFixture<CreateEwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
