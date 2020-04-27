import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumntypeComponent } from './columntype.component';

describe('ColumntypeComponent', () => {
  let component: ColumntypeComponent;
  let fixture: ComponentFixture<ColumntypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumntypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumntypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
