import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticdataComponent } from './staticdata.component';

describe('StaticdataComponent', () => {
  let component: StaticdataComponent;
  let fixture: ComponentFixture<StaticdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
