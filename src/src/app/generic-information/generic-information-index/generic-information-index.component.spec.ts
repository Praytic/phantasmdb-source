import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInformationIndexComponent } from './generic-information-index.component';

describe('GenericInformationIndexComponent', () => {
  let component: GenericInformationIndexComponent;
  let fixture: ComponentFixture<GenericInformationIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericInformationIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericInformationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
