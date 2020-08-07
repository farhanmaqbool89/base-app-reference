import {Component} from '@angular/core';
import {CardComponent} from "../../layout/card/card.component";
import {MatBottomSheet} from "@angular/material";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-bottom-sheet',
    templateUrl: './bottom-sheet.component.html',
    styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

    bottomSheetTS = `
import {Component} from '@angular/core';
import {CardComponent} from "../../layout/card/card.component";
import {MatBottomSheet} from "@angular/material";

@Component({
    selector: 'app-bottom-sheet',
    templateUrl: './bottom-sheet.component.html',
    styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
    constructor(private bottomSheet: MatBottomSheet) {
    }

    openBottomSheet(): void {
        this.bottomSheet.open(CardComponent);
    }
    

}

    
    `;
    bottomSheetHtml = `
 <button mat-raised-button (click)="openBottomSheet()">Open Bottom Sheet</button>

    `;


    bottomSheetCodeView = false;

    constructor(private bottomSheet: MatBottomSheet, private snackbar: SnackbarService) {
    }

    openBottomSheet(): void {
        this.bottomSheet.open(CardComponent);
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
