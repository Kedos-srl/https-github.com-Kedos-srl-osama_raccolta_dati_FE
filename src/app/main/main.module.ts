import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AggiungiVisualizzaFornitoreComponent } from './aggiungi-visualizza-fornitore/aggiungi-visualizza-fornitore.component';
import { TuttiIFornitoriComponent } from './tutti-i-fornitori/tutti-i-fornitori.component';



@NgModule({
  declarations: [
    HomepageComponent,
    MainComponent,
    AggiungiVisualizzaFornitoreComponent,
    TuttiIFornitoriComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
