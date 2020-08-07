import {Component, OnInit} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-slide-toggle',
    templateUrl: './slide-toggle.component.html',
    styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
    slideHTML = `
<section>
    <label>Color:</label>
    <mat-radio-group [(ngModel)]="color">
        <mat-radio-button value="primary">
            Primary
        </mat-radio-button>
        <mat-radio-button value="accent">
            Accent
        </mat-radio-button>
        <mat-radio-button value="warn">
            Warn
        </mat-radio-button>
    </mat-radio-group>
</section>

<section>
    <mat-checkbox [(ngModel)]="checked">Checked</mat-checkbox>
</section>

<section>
    <mat-checkbox [(ngModel)]="disabled">Disabled</mat-checkbox>
</section>

<hr>
<p><strong>Result</strong></p>

<section>
    <mat-slide-toggle
            [color]="color"
            [checked]="checked"
            [disabled]="disabled">
        Slide me!
    </mat-slide-toggle>
</section>
  
  `;

    slideTS = `
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide-toggle',
    templateUrl: './slide-toggle.component.html',
    styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

    color = 'accent';
    checked = false;
    disabled = false;

    constructor() {
    }

    ngOnInit() {
    }

}

    
    `;

    codeView = false;
    color = 'accent';
    checked = false;
    disabled = false;

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
        codeCopy.value = val;
        if (codeCopy.value === val) {
            this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


        }
    }

}
