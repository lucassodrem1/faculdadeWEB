import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreServiceComponent } from './more-service.component';

describe('MoreServiceComponent', () => {
  let component: MoreServiceComponent;
  let fixture: ComponentFixture<MoreServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
