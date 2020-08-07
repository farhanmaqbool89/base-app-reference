import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {AutocompleteComponent} from "../../form-controls/autocomplete/autocomplete.component";
import {testDialog} from "../../source-data";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dialogsource = `
  <button mat-raised-button (click)="openDialog()">Open Dialog</button>
  `;
  dialogSourceTS = `
  import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {AutocompleteComponent} from "../../form-controls/autocomplete/autocomplete.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AutocompleteComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}

  `;
  scrolableDialogSourceTS = `
  import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {TestdialogComponent} from "./testdialog.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TestdialogComponent, {
       panelClass: 'custom-dialog-class',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}

  `;
  dialogView = false;
  scrolableDialogView = false;

  testDialog = testDialog;

  constructor(public dialog: MatDialog, private snackbar: SnackbarService) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AutocompleteComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  openScrollableDialog(templateRef) {
    const dialogRef = this.dialog.open(templateRef, {
      panelClass: 'custom-dialog-class',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  copyText(val: string) {
    console.log(val);
    const codeCopy = document.createElement('textarea');
    codeCopy.value = val.trim();
    document.body.appendChild(codeCopy);
    codeCopy.focus();
    codeCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeCopy);
    codeCopy.value = val;
    if (codeCopy.value === val) {
      this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


    }

  }

}
