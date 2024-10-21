import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Store } from '@ngrx/store';

import { getPersons } from '../../store/persons.actions';
import { Person } from '../../interfaces/person-interface';
import { DataTableConfig } from '../../../../shared/interfaces/data-table-interface';
import { personsTableConfig } from '../../data/data-table/persons-table-config';
import { personsFeature } from '../../store/persons.reducer';
import { Router } from "@angular/router";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);

  tableConfig = signal<DataTableConfig<Person>>(personsTableConfig);
  persons: Signal<Person[]> = this.store.selectSignal(personsFeature.selectPersons);
  isLoading: Signal<boolean> = this.store.selectSignal(personsFeature.selectIsLoading);

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.store.dispatch(getPersons());
  }
}
