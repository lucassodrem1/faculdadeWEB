import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServiceComponent } from './perfil-service.component';

describe('PerfilServiceComponent', () => {
  let component: PerfilServiceComponent;
  let fixture: ComponentFixture<PerfilServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
