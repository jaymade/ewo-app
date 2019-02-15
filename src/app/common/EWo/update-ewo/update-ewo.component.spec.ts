import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEwoComponent } from './update-ewo.component';

describe('UpdateEwoComponent', () => {
  let component: UpdateEwoComponent;
  let fixture: ComponentFixture<UpdateEwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
