import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { Subscription } from 'rxjs';
import {Annuaire} from '../../models/annuaire.model';
import {AnnuaireService} from '../../services/annuaire.service';
import {MatListModule} from '@angular/material/list';
import {MatButton} from '@angular/material/button';
import {DatePipe} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-annuaire-details',
  imports: [MatCardModule, MatListModule, MatButton, RouterLink, DatePipe],
  templateUrl: './annuaire-details.component.html',
  styleUrl: './annuaire-details.component.css'
})
export class AnnuaireDetailsComponent implements OnInit {
  private readonly route = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly onDestroy = inject(DestroyRef);
  private readonly annuaireService = inject(AnnuaireService);

  id = signal<number>(-1);
  annuaire = signal<Annuaire | null>(null);

  ngOnInit() {
    this.unsubscribe(this.activatedRoute.params.subscribe(params => {
      this.id.set(params['id'] as number);
      this.unsubscribe(this.annuaireService.get(this.id()).subscribe((res) => {
        this.annuaire.set(res.body);
      }));
    }));
  }

  unsubscribe(subscription: Subscription) {
    this.onDestroy.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  remove() {
    this.annuaireService.delete(this.id());
    this.route.navigate(['/annuaire']);
  }
}
