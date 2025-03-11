import { Routes } from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AnnuaireComponent} from './annuaire/annuaire.component';
import {routes as annuaireRoutes} from './annuaire/annuaire.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'annuaire',
    pathMatch: 'full'
  },
  {
    path: 'annuaire',
    children: annuaireRoutes,
    component: AnnuaireComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
