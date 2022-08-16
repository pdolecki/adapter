import { Component } from '@angular/core';

import { SnackbarAdapterService } from '../snackbar/snackbar-adapter.service';

@Component({
  selector: 'custom-button',
  styles: [
    `
      button {
        position: absolute;
        top: 10%;
        left: 5%;
      }
    `,
  ],
  template: `<button mat-stroked-button (click)="openSnackBar()">
    Pop-up
  </button> `,
})
export class CustomButton {
  constructor(private snackbarAdapter: SnackbarAdapterService) {}

  openSnackBar() {
    this.snackbarAdapter.openSnackbar('Pop-up!', 'Close');
  }
}
