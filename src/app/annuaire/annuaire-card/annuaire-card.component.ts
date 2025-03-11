import {Component, inject, input} from '@angular/core';
import {Annuaire} from '../../models/annuaire.model';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {AnnuaireService} from '../../services/annuaire.service';

@Component({
  selector: 'app-annuaire-card',
  imports: [
    MatCardModule,
    RouterLink,
    MatButton
  ],
  templateUrl: './annuaire-card.component.html',
  styleUrl: './annuaire-card.component.css'
})
export class AnnuaireCardComponent {
  private readonly annuaireService = inject(AnnuaireService);
  private readonly route = inject(Router);
  annuaire = input.required<Annuaire>();

  remove() {
    this.annuaireService.delete(this.annuaire().id);
    this.route.navigate(['/annuaire']);
  }
}
