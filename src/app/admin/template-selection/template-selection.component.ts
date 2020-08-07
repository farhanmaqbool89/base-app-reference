import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material";
import {GadgetSelectionComponent} from "../gadget-selection/gadget-selection.component";
import {CommonService} from "../services/common.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.scss']
})
export class TemplateSelectionComponent implements OnInit {
  constructor(public dialog: MatDialog,
              private commonService: CommonService,
              private _formBuilder: FormBuilder
  ) { }
  @Input() selectedTemplate: string;
  @Input() themeChange: string;
  @Output() postData = new EventEmitter();
  firstFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GadgetSelectionComponent, {
      width: '2000px',
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: true,
      panelClass: 'widget-selection'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
//   classFunction(){
// this.commonService.themeVersion.next(true);
//   }


}
