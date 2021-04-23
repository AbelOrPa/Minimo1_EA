import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacovigilanciasListComponent } from './farmacovigilancias-list.component';

describe('FarmacovigilanciasListComponent', () => {
  let component: FarmacovigilanciasListComponent;
  let fixture: ComponentFixture<FarmacovigilanciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmacovigilanciasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmacovigilanciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
