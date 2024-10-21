import { inject, Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../components/dialogs/dynamic-dialog/dynamic-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(MatDialog);

  public showDialog<TComponent, TResult>(dynamicComponent: Type<TComponent>, title: string, data: any = {}): MatDialogRef<DynamicDialogComponent<TResult>, TResult> {
    return this.dialog.open<DynamicDialogComponent<TResult>, TResult>(DynamicDialogComponent<TResult>, {
      height: '300px',
      width: '300px',
      data: {
        component: dynamicComponent,
        title,
        ...data
      },
    });
  }
}
