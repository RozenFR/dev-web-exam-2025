import {Component, inject, OnInit} from '@angular/core';
import {AnnuaireService} from '../../services/annuaire.service';
import {AnnuaireCardComponent} from '../annuaire-card/annuaire-card.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-annuaire-list',
  imports: [
    AnnuaireCardComponent,
    MatButton,
    RouterLink
  ],
  templateUrl: './annuaire-list.component.html',
  styleUrl: './annuaire-list.component.css'
})
export class AnnuaireListComponent implements OnInit {
  protected readonly annuaireService = inject(AnnuaireService);

  ngOnInit() {
    this.annuaireService.getAll();
  }
}
