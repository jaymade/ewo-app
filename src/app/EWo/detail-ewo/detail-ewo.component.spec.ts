import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEwoComponent } from './detail-ewo.component';

describe('DetailEwoComponent', () => {
  let component: DetailEwoComponent;
  let fixture: ComponentFixture<DetailEwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
