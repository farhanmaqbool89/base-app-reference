import { Component, OnInit } from '@angular/core';
import {gridColumn, offsettingGrid} from "../../source-data";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  gridView = false;
  offsettingGridView = false;

  gridColumn = gridColumn;
  offsettingGrid = offsettingGrid;

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
