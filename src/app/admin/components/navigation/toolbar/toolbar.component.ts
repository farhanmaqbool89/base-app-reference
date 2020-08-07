import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  basicToolbarView = false;
  multiRowToolbarView = false;

  basicToolbarHtml = `
  <mat-toolbar>My App</mat-toolbar>

  `;
  multiRowToolbarHtml = `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
        <span>Custom Toolbar</span>
    </mat-toolbar-row>

    <mat-toolbar-row>
        <span>Second Line</span>
        <span class="example-spacer"></span>
        <mat-icon class="example-icon">verified_user</mat-icon>
    </mat-toolbar-row>

    <mat-toolbar-row>
        <span>Third Line</span>
        <span class="example-spacer"></span>
        <mat-icon class="example-icon">favorite</mat-icon>
        <mat-icon class="example-icon">delete</mat-icon>
    </mat-toolbar-row>
</mat-toolbar>

  `;

  constructor(private snackbar: SnackbarService) { }

  ngOnInit() {
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
