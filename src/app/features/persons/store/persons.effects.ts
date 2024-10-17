import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { getPersons, personsError, personsFetched } from './persons.actions';
import { Person } from '../interfaces/person-interface';
import { AppToastrService } from '../../../shared/services/toastr.service';
import { ToastrTypeEnum } from '../../../shared/enums/toastr/toastr-type-enum';

@Injectable()
export class PersonsEffects {
  route = inject(ActivatedRoute);
  toastrService = inject(AppToastrService);
  http = inject(HttpClient);
  actions$ = inject(Actions);

  baseUrl = environment.baseUrl;
  apiPrefix = this.baseUrl + 'persons';

  getPersons = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPersons),
      switchMap(() => {
        return this.http.get<Person[]>(`${ this.apiPrefix }`).pipe(
          map(persons => personsFetched({ persons })),
          catchError((errorResponse: HttpErrorResponse) => this.handleError(errorResponse.message))
        );
      }))
  });

  handleError(errorMessage: string) {
    this.toastrService.showToastr(errorMessage, ToastrTypeEnum.Error);
    return of(personsError({ errorMessage }));
  }
}
