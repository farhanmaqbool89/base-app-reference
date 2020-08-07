import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-snackbar-tooltip',
    templateUrl: './snackbar-tooltip.component.html',
    styleUrls: ['./snackbar-tooltip.component.scss']
})
export class SnackbarTooltipComponent implements OnInit {
snackbarTS = `
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-snackbar-tooltip',
    templateUrl: './snackbar-tooltip.component.html',
    styleUrls: ['./snackbar-tooltip.component.scss']
})
export class SnackbarTooltipComponent implements OnInit {

    constructor(private snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

}

`;


    toolbarView = false;
    toolbarSource = `
   <button mat-raised-button
          matTooltip="Info about the action"
          aria-label="Button that displays a tooltip when focused or hovered over">
    Action
  </button>
  `;

    snackbarView = false;
    snackbarSource = `
    <mat-form-field>
      <input matInput value="Disco party!" placeholder="Message" #message>
    </mat-form-field>

    <mat-form-field>
      <input matInput value="Dance" placeholder="Action" #action>
    </mat-form-field>

    <button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>
  `;
    constructor(private snackBar: MatSnackBar, private snackbar: SnackbarService) {
    }

    ngOnInit() {
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
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
