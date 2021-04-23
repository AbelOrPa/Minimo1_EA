import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacovigilanciasRegisterComponent } from './farmacovigilancias-register.component';

describe('FarmacovigilanciasRegisterComponent', () => {
  let component: FarmacovigilanciasRegisterComponent;
  let fixture: ComponentFixture<FarmacovigilanciasRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmacovigilanciasRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmacovigilanciasRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
