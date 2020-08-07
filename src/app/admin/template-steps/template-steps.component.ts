import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TemplateSelectionComponent} from "../template-selection/template-selection.component";

export interface templateGroup {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-template-steps',
    templateUrl: './template-steps.component.html',
    styleUrls: ['./template-steps.component.scss']
})
export class TemplateStepsComponent implements OnInit {
    constructor(private _formBuilder: FormBuilder) {
    }
    @ViewChild('stepper') stepper: MatStepper;
    templateSelected = false;
    firstFormGroup: FormGroup;
    groups: templateGroup[] = [
        {value: 'g1', viewValue: 'Group One'},
        {value: 'g2', viewValue: 'Group Two'},
        {value: 'g3', viewValue: 'Group Three'}
    ];

    templateType;
    // @Output() selectedTemplate = new EventEmitter();
    // @ViewChild(TemplateSelectionComponent) templateType;
    parentMessage;
    selectedTemplate;



    selectedValue: string;

    ngOnInit() {
        // this.firstFormGroup = this._formBuilder.group({
        //     firstCtrl: ['', Validators.required]
        // });
    }
    nextStepTwo(e) {
        this.templateSelected = true;
        this.selectedTemplate = e;
        // this.selectedTemplate.emit(e);
        // this.stepper.selected.completed = true;
        // move to next step
        // this.stepper.next();
    }

    receiveMessage($event) {
        this.templateType = $event
    }
}
