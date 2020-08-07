import {Component, OnInit} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    actionCard = `
<mat-card>
    <mat-card-header>
        <mat-card-title>Cat</mat-card-title>
        <mat-card-subtitle>Quis Nostrud Exercitation</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="/assets/images/cica1.jpg" alt="cat">
    <mat-card-content>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
        </p>
    </mat-card-content>
    <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
    </mat-card-actions>
</mat-card>/
    `;

    sourceView = false;
    actionCardSourceView = false;

    constructor(private snackbar: SnackbarService) {
    }

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
        codeCopy.value = val
        if (codeCopy.value === val) {
            this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


        }
    }

}
