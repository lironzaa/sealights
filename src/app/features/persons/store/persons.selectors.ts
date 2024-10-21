import { createSelector } from '@ngrx/store';

import { Country } from '../interfaces/person-interface';
import { personsFeature } from './persons.reducer';

export const selectCitiesByCountry = (countryId: number) => createSelector(
  personsFeature.selectCountries,
  (countries: Country[]) => {
    const selectedCountry = countries.find(country => country.id === countryId);
    return selectedCountry ? selectedCountry.cities : [];
  }
);
