import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AnnuaireService} from '../../services/annuaire.service';
import {Router} from '@angular/router';
import {Job} from '../../models/Job';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-annuaire-add',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './annuaire-add.component.html',
  styleUrl: './annuaire-add.component.css'
})
export class AnnuaireAddComponent {
  private readonly annuaireService = inject(AnnuaireService);
  private readonly route = inject(Router);

  form = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
    lastName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    birthday: new FormControl('', {
      validators: [Validators.required],
    }),
    job: new FormControl<Job>(Job.DEVELOPER, {
      validators: [Validators.required]
    })
  });

  onSubmit() {
    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }
    console.log('Form is valid');
    const data = this.form.value;
    this.annuaireService.create({
      id: this.annuaireService.annuaires().length + 1,
      firstName: data.firstName!,
      lastName: data.lastName!,
      birthday: new Date(data.birthday!),
      email: data.email!,
      job: data.job!,
    });

    this.route.navigate(['/annuaire']);
  }

  protected readonly Job = Job;
  protected readonly Object = Object;
}
