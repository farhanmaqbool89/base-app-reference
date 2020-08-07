import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {templateGroup} from "../template-steps/template-steps.component";
export interface templateGroup {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gadget-selection',
  templateUrl: './gadget-selection.component.html',
  styleUrls: ['./gadget-selection.component.scss']
})
export class GadgetSelectionComponent implements OnInit {
  selectedDataRate = '10';
  constructor() { }
    @Output() addComponentClick = new EventEmitter();
  firstFormGroup: FormGroup;
  groups: templateGroup[] = [
    {value: 'v1', viewValue: 'Value One'},
    {value: 'v2', viewValue: 'Value Two'},
    {value: 'v3', viewValue: 'Value Three'}
  ];
  selectAttributes = new FormControl();
  toppingList: string[] = ['Incoming Calls', 'Outgoing Calls', 'Total Calls', 'customer Response', 'Successful Order', 'Agent On Call', 'Calls Answered Rate', 'Calls Abandoned Rate'];
  selectedValue: 'v1';
  color;
  color2;
  color3;
  color4;
  toggle3;
  toggle;
  toggle4;
  toggle2;
  ngOnInit() {
  }

  mySelections: string[];

  changed() {
    if (this.selectAttributes.value.length < 7) {
      this.mySelections = this.selectAttributes.value;
    } else {
      this.selectAttributes.setValue(this.mySelections);
    }
  }

}
