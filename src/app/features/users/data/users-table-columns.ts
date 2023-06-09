import { TableColumn } from "../../../shared/interfaces/data-table";

export const usersTableColumns: TableColumn[] = [
  { name: 'id', label: 'Id' },
  { name: 'name', label: 'Name' },
  { name: 'formattedDate', label: 'Birthdate' },
  { name: 'addressesCount', label: 'Addresses count' },
];
