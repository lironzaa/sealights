import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { emptyFormArrayValidator } from '../../../../shared/validators/empty-form-array-validator';
import { Address } from '../../interfaces/person-interface';
import { CreatePersonData } from '../../types/actions/persons-actions';
import { ErrorService } from '../../../../shared/services/error.service';
import { createPerson } from '../../store/persons.actions';
import { FormUtilitiesService } from '../../../../shared/services/form-utilities.service';
import { PersonFormFormCustomErrorsData } from '../../data/forms-errors/person-form-custom-errors';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonFormComponent {
  fb = inject(FormBuilder);
  store = inject(Store);
  errorService = inject(ErrorService);
  formUtilitiesService = inject(FormUtilitiesService);
  eventFormFormCustomErrorsData = signal(PersonFormFormCustomErrorsData);

  personForm = this.fb.group({
    'name': new FormControl<string | null>(null, [ Validators.required ]),
    'birthDate': new FormControl<string | null>(null),
    'addresses': new FormControl<Address[] | null>(null, [ emptyFormArrayValidator ]),
  });

  // populateCreatePersonData(): CreatePersonData {
  //   console.log(this.personForm.value);
  //   if (!this.personForm.value.name || !this.personForm.value.addresses) throw this.errorService.throwError('Form values are not defined');
  //   return {
  //     name: this.personForm.value.name,
  //     birthDate: this.personForm.value.birthDate,
  //     addresses: this.personForm.value.addresses
  //   }
  // }

  onSubmit(): void {
    console.log(this.personForm.value);
    // const createPersonData = this.populateCreatePersonData();
    // console.log(createPersonData);
    this.store.dispatch(createPerson({ person: this.personForm.value }));
  }
}
