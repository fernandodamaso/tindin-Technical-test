import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from 'src/app/_models/registerGame';

export interface DialogData {
  name: string;
  url: string;
  type: string;
}

@Component({
  selector: 'app-modal-photos',
  templateUrl: './modal-photos.component.html',
  styleUrls: ['./modal-photos.component.scss'],
})
export class ModalPhotosComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalPhotosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
