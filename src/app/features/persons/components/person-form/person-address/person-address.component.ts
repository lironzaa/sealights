import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { FormUtilitiesService } from '../../../../../shared/services/form-utilities.service';
import { personsFeature } from '../../../store/persons.reducer';
import { City, Country } from '../../../interfaces/person-interface';
import { DialogService } from '../../../../../shared/services/dialog.service';
import { AddCityDialogComponent } from '../../dialog/add-city/add-city-dialog.component';
import { addCity } from '../../../store/persons.actions';
import { selectCitiesByCountry } from '../../../store/persons.selectors';

@Component({
  selector: 'app-person-address',
  templateUrl: './person-address.component.html',
  styleUrl: './person-address.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonAddressComponent {
  store = inject(Store);
  formUtilitiesService = inject(FormUtilitiesService);
  dialogService = inject(DialogService);

  addressesArray = input.required<FormArray<FormGroup>>();
  countries: Signal<Country[]> = this.store.selectSignal(personsFeature.selectCountries);
  isLoading: Signal<boolean> = this.store.selectSignal(personsFeature.selectIsLoading);

  getCitiesSignal(selectedCountryId: number | null): Signal<City[]> {
    return computed(() => {
      if (selectedCountryId) {
        return this.store.selectSignal(selectCitiesByCountry(selectedCountryId))();
      }
      return [];
    });
  }

  public async onOpenCityDialog(countryId: number): Promise<void> {
    const countryName = this.countries().find(country => country.id === countryId)?.name;
    const dialogRef = this.dialogService.showDialog<AddCityDialogComponent, { name: string }>(
      AddCityDialogComponent,
      `Add city to ${ countryName }`
    );
    const dialogResult = await dialogRef.afterClosed().toPromise();
    if (dialogResult) this.store.dispatch(addCity({ name: dialogResult.name, countryId: countryId }));
  }

  removeAddress(index: number): void {
    this.addressesArray().removeAt(index);
  }
}
