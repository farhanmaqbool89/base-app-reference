import {Component, OnInit} from '@angular/core';
import {coerceNumberProperty} from "@angular/cdk/coercion";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    sliderHTML = `
  
  <section>
          <div class="form-group">
            <mat-form-field appearance="outline" class="col-md-4">
              <mat-label>Value</mat-label>
              <input matInput type="number" placeholder="Value" [(ngModel)]="value">
          </mat-form-field>
            <mat-form-field appearance="outline" class="col-md-4">
              <mat-label>Min Value</mat-label>
              <input matInput type="number" placeholder="Min value" [(ngModel)]="min">
          </mat-form-field>
            <mat-form-field appearance="outline" class="col-md-4">
              <mat-label>Max Value</mat-label>
              <input matInput type="number" placeholder="Max value" [(ngModel)]="max">
          </mat-form-field>
          </div>
          <mat-form-field appearance="outline" class="col-md-12">
            <mat-label>Step size</mat-label>
            <input matInput type="number" placeholder="Step size" [(ngModel)]="step">
          </mat-form-field>
        </section>

  <section>
          <div class="form-group">
          <mat-checkbox class="col-md-4"  [(ngModel)]="showTicks">Show ticks</mat-checkbox>
          <mat-checkbox class="col-md-4"  [(ngModel)]="autoTicks" *ngIf="showTicks">
            Auto ticks
          </mat-checkbox>
          <mat-form-field appearance="outline"  class="col-md-4" *ngIf="showTicks && !autoTicks">
            <mat-label>Tick interval</mat-label>
            <input matInput type="number" placeholder="Tick interval" [(ngModel)]="tickInterval">
          </mat-form-field>
          </div>
        </section>

  <section >
          <mat-checkbox class="col-md-3"  [(ngModel)]="thumbLabel">Show thumb label</mat-checkbox>
          <mat-checkbox class="col-md-3" [(ngModel)]="vertical">Vertical</mat-checkbox>
          <mat-checkbox class="col-md-3" [(ngModel)]="invert">Inverted</mat-checkbox>
          <mat-checkbox class="col-md-3" [(ngModel)]="disabled">Disabled</mat-checkbox>
        </section>
  
  `;
    sliderTS = `
    
import {Component, OnInit} from '@angular/core';
import {coerceNumberProperty} from "@angular/cdk/coercion";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

 autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }

    set tickInterval(value) {
        this._tickInterval = coerceNumberProperty(value);
    }

    private _tickInterval = 1;


    constructor() {
    }

    ngOnInit() {
    }

}
`;
    simpleSlider =`
<mat-slider class="col-md-12"></mat-slider>
`


    autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;
    codeView = false;
    codeViewSimpleSlider = false;
    private _tickInterval = 1;


    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }

    set tickInterval(value) {
        this._tickInterval = coerceNumberProperty(value);
    }



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
