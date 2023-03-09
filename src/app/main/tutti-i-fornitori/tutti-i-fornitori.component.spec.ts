import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuttiIFornitoriComponent } from './tutti-i-fornitori.component';

describe('TuttiIFornitoriComponent', () => {
  let component: TuttiIFornitoriComponent;
  let fixture: ComponentFixture<TuttiIFornitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuttiIFornitoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuttiIFornitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
