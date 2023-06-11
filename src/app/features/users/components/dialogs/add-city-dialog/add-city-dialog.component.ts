import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface DialogData {
  title: string;
  label: string;
}

@Component({
  selector: 'app-add-city-dialog',
  templateUrl: './add-city-dialog.component.html',
  styleUrls: [ './add-city-dialog.component.scss' ]
})
export class AddCityDialogComponent {
  value!: string;
  constructor(
    public dialogRef: MatDialogRef<AddCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
