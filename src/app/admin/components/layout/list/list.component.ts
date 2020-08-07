import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  selectionListView = false;
  angularListView = false;
  bootstrapListView = false;
  angularListSource = `
  <mat-list role="list">
    <mat-list-item role="listitem">Item 1</mat-list-item>
    <mat-list-item role="listitem">Item 2</mat-list-item>
    <mat-list-item role="listitem">Item 3</mat-list-item>
    <mat-list-item role="listitem">Item 4</mat-list-item>
    <mat-list-item role="listitem">Item 5</mat-list-item>
  </mat-list>
  `;
  selectionListSourceTS = `
 import {Component} from '@angular/core';

/**
 * @title List with selection
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}

 `;
  selectionListSource = `
<mat-selection-list #shoes>
  <mat-list-option *ngFor="let shoe of typesOfShoes">
  {{shoe}}
</mat-list-option>
</mat-selection-list>

<p>
Options selected: {{shoes.selectedOptions.selected.length}}
</p>
  `;

  bootstrapListSource = `
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
`;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

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
