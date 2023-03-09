import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AggiungiVisualizzaFornitoreComponent } from './aggiungi-visualizza-fornitore/aggiungi-visualizza-fornitore.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main.component';
import { TuttiIFornitoriComponent } from './tutti-i-fornitori/tutti-i-fornitori.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  { 
    path: '', 
    component: MainComponent,
    children: [
      {
        path: 'homepage',
        component: HomepageComponent
      },

      {
        path: 'addViewFornitore',
        component: AggiungiVisualizzaFornitoreComponent
      },

      {
        path: 'listaFornitori',
        component: TuttiIFornitoriComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
