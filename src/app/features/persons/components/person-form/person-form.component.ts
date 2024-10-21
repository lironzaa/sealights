import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

import { emptyFormArrayValidator } from '../../../../shared/validators/empty-form-array-validator';
import { CreatePersonAddress, CreatePersonData } from '../../interfaces/person-actions-interface';
import { ErrorService } from '../../../../shared/services/error.service';
import { createPerson, getCountries } from '../../store/persons.actions';
import { FormUtilitiesService } from '../../../../shared/services/form-utilities.service';
import { PersonFormFormCustomErrorsData } from '../../data/forms-errors/person-form-custom-errors';
import { Unsubscribe } from '../../../../shared/class/unsubscribe.class';
import { AddressArrayControlValue } from '../../interfaces/person-interface';
import { Utils } from "../../../../shared/class/utils.class";
import { personsFeature } from "../../store/persons.reducer";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonFormComponent extends Unsubscribe implements OnInit {
  fb = inject(FormBuilder);
  store = inject(Store);
  errorService = inject(ErrorService);
  formUtilitiesService = inject(FormUtilitiesService);

  personForm = this.fb.group({
    'name': new FormControl<string | null>(null, [ Validators.required ]),
    'birthdate': new FormControl<Date | null>(null),
    'addresses': new FormArray<FormGroup>([], [ emptyFormArrayValidator ]),
  });
  addressesArray = signal(this.personForm.get('addresses') as FormArray<FormGroup>);
  isLoading: Signal<boolean> = this.store.selectSignal(personsFeature.selectIsLoading);
  personFormFormCustomErrorsData = signal(PersonFormFormCustomErrorsData);

  ngOnInit(): void {
    this.store.dispatch(getCountries());
  }

  populateCreatePersonData(): CreatePersonData {
    if (!this.personForm.value.name || (this.personForm.value.addresses && this.personForm.value.addresses?.length === 0)) throw this.errorService.throwError('Form values are not defined');
    return {
      name: this.personForm.value.name,
      ...(this.personForm.value.birthdate && { birthdate: Utils.dateToDDMMYYYY(this.personForm.value.birthdate) }),
      addresses: this.mapAddressesArrayControls(this.personForm.value.addresses as AddressArrayControlValue[])
    }
  }

  mapAddressesArrayControls(formAddresses: AddressArrayControlValue[]): CreatePersonAddress[] {
    return formAddresses.map(address => {
      return {
        name: address.name,
        countryId: address.country,
        cityId: address.city,
        street: address.street,
      }
    })
  }

  onAddAddress(): void {
    const updatedFormArray = new FormArray<FormGroup>([
      ...this.addressesArray().controls.map(control => control as FormGroup),
      this.createAddressGroup()
    ]);

    this.personForm.setControl('addresses', updatedFormArray);
    this.addressesArray.set(updatedFormArray);
  }

  createAddressGroup(): FormGroup {
    const addressGroup = this.fb.group({
      'name': new FormControl(null, Validators.required),
      'country': new FormControl(null),
      'city': new FormControl({ value: null, disabled: true }),
      'street': new FormControl(null, Validators.required),
    });

    addressGroup.get('country')?.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((selectedCountryId: number | null) => {
      if (selectedCountryId) addressGroup.get('city')?.enable();
    });

    return addressGroup;
  }

  onSubmit(): void {
    const createPersonData = this.populateCreatePersonData();
    this.store.dispatch(createPerson({ person: createPersonData }));
  }
}
