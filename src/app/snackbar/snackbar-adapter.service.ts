import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Snackbar from 'node-snackbar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarAdapterService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(message: string, action: string) {
    // MATERIAL
    // this.snackBar.open(message, action, {
    //   duration: 2000,
    // });

    // POLONEL
    Snackbar.show({
      pos: 'bottom-left',
      text: message,
      actionText: action,
      width: '450px',
    });
  }
}
