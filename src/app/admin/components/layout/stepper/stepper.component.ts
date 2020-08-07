import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

    verticalSimpleStepper = false;
    horizontalSimpleStepper = false;
    formStepper = false;
    formStepperSourceHtml = `
  <mat-horizontal-stepper [linear]="isLinear" #stepper>
        <mat-step [stepControl]="firstFormGroup">
            <form [formGroup]="firstFormGroup">
                <ng-template matStepLabel>Fill out your name</ng-template>
                <mat-form-field>
                    <input matInput placeholder="Last name, First name" formControlName="firstCtrl"
                           required>
                </mat-form-field>
                <div>
                    <button mat-button matStepperNext>Next</button>
                </div>
            </form>
        </mat-step>
        <mat-step [stepControl]="secondFormGroup">
            <form [formGroup]="secondFormGroup">
                <ng-template matStepLabel>Fill out your address</ng-template>
                <mat-form-field>
                    <input matInput placeholder="Address" formControlName="secondCtrl" required>
                </mat-form-field>
                <div>
                    <button mat-button matStepperPrevious>Back</button>
                    <button mat-button matStepperNext>Next</button>
                </div>
            </form>
        </mat-step>
        <mat-step>
            <ng-template matStepLabel>Done</ng-template>
            You are now done.
            <div>
                <button mat-button matStepperPrevious>Back</button>
                <button mat-button (click)="stepper.reset()">Reset</button>
            </div>
        </mat-step>
</mat-horizontal-stepper>
  `;
    horizontalSimpleStepperSource = `
    <mat-horizontal-stepper>
        <mat-step label="Step 1">
        Lorem ipsum dolor 
        </mat-step>
        <mat-step label="Step 1">
        Excepteur sint 
        </mat-step>
    </mat-horizontal-stepper>
`;
    verticalSimpleStepperSource = `
    <mat-vertical-stepper>
        <mat-step label="Step 1">
            Lorem ipsum dolor 
        </mat-step>
        <mat-step label="Step 1">
            Excepteur sint 
        </mat-step>
    </mat-vertical-stepper>
`;
    stepperErrorSourceTS = `
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class StepperComponent implements OnInit {
 
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
`;


    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder, private snackbar: SnackbarService) {
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
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
