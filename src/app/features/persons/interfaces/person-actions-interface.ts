export interface CreatePersonData {
  name: string;
  birthdate?: string;
  addresses: CreatePersonAddress[]
}

export interface CreatePersonAddress {
  name: string;
  countryId?: number | null;
  cityId?: number | null | undefined;
  street: string;
}
