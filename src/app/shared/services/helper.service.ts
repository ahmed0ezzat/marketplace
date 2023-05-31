import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private snackBar: MatSnackBar) { }

  async openSnackBar(message: string) {
    return this.snackBar.open(
      message,
      'Close',
      {
        duration: 8000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      }
    );
  }
}
