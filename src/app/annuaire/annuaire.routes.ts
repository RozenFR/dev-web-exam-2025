import {Routes} from '@angular/router';
import {AnnuaireListComponent} from './annuaire-list/annuaire-list.component';
import {AnnuaireAddComponent} from './annuaire-add/annuaire-add.component';
import {AnnuaireDetailsComponent} from './annuaire-details/annuaire-details.component';

export const routes: Routes = [
  {
    path: '',
    component: AnnuaireListComponent
  },
  {
    path: 'create',
    component: AnnuaireAddComponent
  },
  {
    path: ':id',
    component: AnnuaireDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
