import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  datePipe = new DatePipe('en-US');

  transform(value: string | number | null, format: string = 'MMM d, y'): string | null {
    if (!value) return null;
    if (typeof value === 'number') return null;

    const [ day, month, year ] = value.split('/').map(Number);
    if (!day || !month || !year) return 'Invalid Date';

    const date = new Date(year, month - 1, day); // month is zero-based in JS Date

    return this.datePipe.transform(date, format);
  }
}
