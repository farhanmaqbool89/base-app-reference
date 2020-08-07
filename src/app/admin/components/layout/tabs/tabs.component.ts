import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {SnackbarService} from "../../../services/snackbar.service";

export interface ExampleTab {
    label: string;
    content: string;
}

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
    asyncTabs: Observable<ExampleTab[]>;
    dynamicTabView = false;
    simpleTabView = false;

    simpleTabeSource = `
<mat-tab-group>
    <mat-tab label="First">
        First tab
    </mat-tab>
    <mat-tab label="Second">
        Second Tab
    </mat-tab>
    <mat-tab label="Third">
        Third Tab
    </mat-tab>
</mat-tab-group>
`;

    dynamicTabSourceTS = `
import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs";
export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;
 
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });

  }

  ngOnInit() {
  }

}
`;
    dynamicTabHTML = `
<ng-container *ngIf="(asyncTabs | async) === null">
    Loading tabs...
</ng-container>

<mat-tab-group>
  <mat-tab *ngFor="let tab of asyncTabs | async">
  <ng-template mat-tab-label>{{tab.label}}</ng-template>
      {{tab.content}}
   </mat-tab>
</mat-tab-group>
`;


    constructor(private snackbar: SnackbarService) {
        this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
            setTimeout(() => {
                observer.next([
                    {label: 'First', content: 'Content 1'},
                    {label: 'Second', content: 'Content 2'},
                    {label: 'Third', content: 'Content 3'},
                ]);
            }, 1000);
        });

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
