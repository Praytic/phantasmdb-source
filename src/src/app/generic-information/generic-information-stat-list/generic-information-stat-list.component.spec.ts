import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInformationStatListComponent } from './generic-information-stat-list.component';

describe('GenericInformationStatListComponent', () => {
  let component: GenericInformationStatListComponent;
  let fixture: ComponentFixture<GenericInformationStatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericInformationStatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericInformationStatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
