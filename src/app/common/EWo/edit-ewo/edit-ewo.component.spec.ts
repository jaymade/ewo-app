import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEwoComponent } from './edit-ewo.component';

describe('EditEwoComponent', () => {
  let component: EditEwoComponent;
  let fixture: ComponentFixture<EditEwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
