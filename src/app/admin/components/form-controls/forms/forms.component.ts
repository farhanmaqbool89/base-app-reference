import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    form: FormGroup;
    formErrors: any;
    codeView = false;

    formHTML = `
<form class="form-horizontal form-bordered" [formGroup]="form">
    <div class="form-group">
        <mat-form-field appearance="outline" class="col-md-12">
            <mat-label>Fill form field</mat-label>
            <input matInput placeholder="Input">
        </mat-form-field>
    </div>

    <div class="form-group">
        <mat-form-field appearance="outline" class="col-md-12">
            <mat-label>Company (disabled)</mat-label>
            <input matInput placeholder="Company (disabled)" formControlName="company">
        </mat-form-field>
    </div>

    <div class="form-group">
        <mat-form-field appearance="outline" class="col-md-6">
            <mat-label>First name</mat-label>
            <input matInput placeholder="First name" formControlName="firstName" required>
            <mat-error *ngIf="formErrors.firstName.required">
                First Name is required!
            </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="col-md-6">
            <mat-label>Last name</mat-label>
            <input matInput placeholder="Last name" formControlName="lastName" required>
            <mat-error *ngIf="formErrors.lastName.required">
                Last Name is required!
            </mat-error>
        </mat-form-field>
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
        <mat-form-field appearance="outline" class="col-md-12 textarea">
            <mat-label>Address</mat-label>
            <textarea matInput placeholder="Address" formControlName="address" required>
    1600 Amphitheatre Pkwy
</textarea>
            <mat-error *ngIf="formErrors.address.required">
                Address is required!
            </mat-error>
        </mat-form-field>
    </div>

    <div class="form-group">
        <mat-form-field appearance="outline" class="col-md-12 textarea">
            <mat-label>Address 2</mat-label>
            <textarea matInput placeholder="Address 2" formControlName="address2"></textarea>
            <mat-error *ngIf="formErrors.address2.required">
                Address 2 is required!
            </mat-error>
        </mat-form-field>
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
        <mat-form-field appearance="outline" class="col-md-4 col-sm-12">
            <mat-label>City</mat-label>
            <input matInput placeholder="City" formControlName="city" required>
            <mat-error *ngIf="formErrors.city.required">
                City is required!
            </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="col-md-4 col-sm-12">
            <mat-label>State</mat-label>
            <input matInput placeholder="State" formControlName="state" required>
            <mat-error *ngIf="formErrors.state.required">
                State is required!
            </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="col-md-4 col-sm-12">
            <mat-label>Postal Code</mat-label>
            <input matInput #postalCode placeholder="Postal Code" value="94043"
                   formControlName="postalCode" required>
            <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
            <mat-error *ngIf="formErrors.postalCode.maxlength">
                Postal Code needs to be max. {{formErrors.postalCode.maxlength.requiredLength}}
                characters
            </mat-error>
            <mat-error *ngIf="formErrors.postalCode.required">
                Postal Code is required!
            </mat-error>
        </mat-form-field>
    </div>

    <div class="form-group">
        <mat-form-field appearance="outline" class="col-sm-12">
            <mat-label>Country</mat-label>
            <mat-select placeholder="Country" formControlName="country" required>
                <mat-option [value]="'United States of America'">
                    United States of America
                </mat-option>
                <mat-option [value]="'United Kingdom'">
                    United Kingdom
                </mat-option>
                <mat-option [value]="'Russia'">
                    Russia
                </mat-option>
                <mat-option [value]="'China'">
                    China
                </mat-option>
                <mat-option [value]="'Japan'">
                    Japan
                </mat-option>
                <mat-option [value]="'Turkey'">
                    Turkey
                </mat-option>
            </mat-select>
            <mat-error *ngIf="formErrors.country.required">
                Country is required!
            </mat-error>
        </mat-form-field>
    </div>

</form>
  `;
    formTS = `
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
      selector: 'app-forms',
      templateUrl: './forms.component.html',
      styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
      form: FormGroup;
      formErrors: any;
      
      constructor(private formBuilder: FormBuilder, private snackbar: SnackbarService) {
            // Reactive form errors
            this.formErrors = {
              company: {},
              firstName: {},
              lastName: {},
              address: {},
              address2: {},
              city: {},
              state: {},
              postalCode: {},
              country: {}
            };
      }

      ngOnInit() {
    
            // Reactive Form
            this.form = this.formBuilder.group({
              company   : [
                {
                  value   : 'Google',
                  disabled: true
                }, Validators.required
              ],
              firstName : [' ', Validators.required],
              lastName  : [' ', Validators.required],
              address   : [' ', Validators.required],
              address2  : [' ', Validators.required],
              city      : [' ', Validators.required],
              state     : [' ', Validators.required],
              postalCode: [' ', [Validators.required, Validators.maxLength(5)]],
              country   : [' ', Validators.required]
            });
      }
 }
  `;


    constructor(private formBuilder: FormBuilder, private snackbar: SnackbarService) {
        // Reactive form errors
        this.formErrors = {
            company: {},
            firstName: {},
            lastName: {},
            address: {},
            address2: {},
            city: {},
            state: {},
            postalCode: {},
            country: {}
        };
    }

    ngOnInit() {

        // Reactive Form
        this.form = this.formBuilder.group({
            company: [
                {
                    value: 'Google',
                    disabled: true
                }, Validators.required
            ],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            address2: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]],
            country: ['', Validators.required]
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
