import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationComponent } from './../../account/registration/registration.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';


@Injectable()
export class NavHeaderService {
    constructor(private dialog: MatDialog)     {

    }
    menuTransparent: string;
    makeMenuTransparent() {
        this.menuTransparent = 'menuTransparent';
    }

    hideMenuTransparent() {
        this.menuTransparent = '';
    }
    public dialogOpen(): Observable<boolean> {
        let dialogRef: MatDialogRef<RegistrationComponent>;
        dialogRef = this.dialog.open(RegistrationComponent, {
            width: '540px',
            disableClose: true,
          });
          return dialogRef.afterClosed();
      }
}
