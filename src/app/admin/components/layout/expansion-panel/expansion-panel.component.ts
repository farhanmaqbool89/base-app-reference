import { Component, OnInit } from '@angular/core';
import {accordionPanel, simpleExpansionPanel} from "../../source-data";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  simpleExpPanelTS = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  panelOpenState = false;

  constructor() { }

} 
  `;
  accordionPanelSCSS = `
  .accordion-main {
  .mat-expansion-panel-header-title {
    flex-basis: 0;
  }

  .mat-expansion-panel-header-description {
    @extend .mat-expansion-panel-header-title;
    justify-content: space-between;
    align-items: center;
  }
}

  `;
  accordionPanelTS = `
import {Component} from '@angular/core';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css'],
})
export class ExpansionStepsExample {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
  `;

  step = 0;
  panelOpenState = false;
  simpleExpPanel = simpleExpansionPanel;
  accordionPanel = accordionPanel;

  accordionView = false;
  expansionView = false;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


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
