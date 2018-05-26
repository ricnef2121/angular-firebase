import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroComboComponent } from './filtro-combo.component';

describe('FiltroComboComponent', () => {
  let component: FiltroComboComponent;
  let fixture: ComponentFixture<FiltroComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
