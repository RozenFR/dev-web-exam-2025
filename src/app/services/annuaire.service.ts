import { HttpClient } from '@angular/common/http';
import {inject, Injectable, OnInit, signal} from '@angular/core';
import {Annuaire} from '../models/annuaire.model';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireService implements OnInit {

  private readonly httpClient = inject(HttpClient);

  annuaires = signal<Annuaire[]>([]);

  constructor() { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpClient.get<{ message: string, body: Annuaire[] }>('http://localhost:8080/api/annuaire/getall').subscribe(response => {
      this.annuaires.set(response.body);
      console.log(response.body);
    });
  }

  get(id: number) {
    return this.httpClient.get<{ message: string, body: Annuaire }>('http://localhost:8080/api/annuaire/get/' + id);
  }

  create(data: Annuaire) {
    if (data === undefined || data === null) {
      console.error("Invalid data provided to create method");
      return false;
    }
    this.httpClient.post<Annuaire>('http://localhost:8080/api/annuaire/create', data).subscribe(annuaire => {})
    this.annuaires.update(annuaire => [...annuaire, data]);
    return true;
  }

  delete(id: number) {
    this.httpClient.delete('http://localhost:8080/api/annuaire/delete/' + id).subscribe();
    const updatedannuaires = this.annuaires().filter(annuaire => annuaire.id !== id);
    this.annuaires.set(updatedannuaires);
  }

}
