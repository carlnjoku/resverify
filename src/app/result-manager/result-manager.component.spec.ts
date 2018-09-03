import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultManagerComponent } from './result-manager.component';

describe('ResultManagerComponent', () => {
  let component: ResultManagerComponent;
  let fixture: ComponentFixture<ResultManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
