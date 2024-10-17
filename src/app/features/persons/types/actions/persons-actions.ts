import { Person } from '../../interfaces/person-interface';

export type CreatePersonData = Omit<Person, 'id' | 'addressesCount'> & {
  birthDate?: string;
};
