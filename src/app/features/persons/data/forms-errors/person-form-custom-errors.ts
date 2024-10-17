import {
  PersonFormCustomErrorsInterface
} from '../../interfaces/forms-errors/event-form-custom-errors.interface';

export const PersonFormFormCustomErrorsData: PersonFormCustomErrorsInterface = {
  name: {
    required: () => 'Name is required field',
  },
  addresses: {
    required: () => 'Addresses is required field',
  },
}
