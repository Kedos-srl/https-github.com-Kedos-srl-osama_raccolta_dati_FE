import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiVisualizzaFornitoreComponent } from './aggiungi-visualizza-fornitore.component';

describe('AggiungiVisualizzaFornitoreComponent', () => {
  let component: AggiungiVisualizzaFornitoreComponent;
  let fixture: ComponentFixture<AggiungiVisualizzaFornitoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiVisualizzaFornitoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiVisualizzaFornitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
