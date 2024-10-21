import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  inject,
  ViewContainerRef,
  Type,
  signal,
  viewChild,
  OnDestroy
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicDialogInterface } from "../../../interfaces/dynamic-dialog-interface";

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: [ './dynamic-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDialogComponent<T> implements AfterViewInit, OnDestroy {
  private vcRef = viewChild('dynamicComponent', { read: ViewContainerRef });
  private readonly componentRefSignal = signal<ComponentRef<DynamicDialogInterface<T>> | null>(null);

  private dialogRef = inject(MatDialogRef<DynamicDialogComponent<T>>);
  data = inject(MAT_DIALOG_DATA) as {
    component: Type<DynamicDialogInterface<T>>;
    title: string;
    data: any;
  };

  ngAfterViewInit(): void {
    const viewContainerRef = this.vcRef();
    if (viewContainerRef) {
      const componentRef: ComponentRef<DynamicDialogInterface<T>> = viewContainerRef.createComponent(this.data.component);
      this.componentRefSignal.set(componentRef);

      componentRef.instance.initComponent?.({ ...this.data.data });

      componentRef.instance.onSubmit.subscribe((submittedData: T) => {
        this.dialogRef.close(submittedData);
      });

      componentRef.instance.onCancel.subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  ngOnDestroy(): void {
    const componentRef = this.componentRefSignal();
    componentRef?.destroy();
  }
}
