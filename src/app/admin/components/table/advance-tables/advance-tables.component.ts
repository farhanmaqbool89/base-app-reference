import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';
import {advanceTableTS} from "../../source-data";
import {SnackbarService} from "../../../services/snackbar.service";

export interface UserData {
  id: any;
  name: any;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-advance-tables',
  templateUrl: './advance-tables.component.html',
  styleUrls: ['./advance-tables.component.scss']
})
export class AdvanceTablesComponent implements OnInit {
  showSource = false;
  tableSourceTS = advanceTableTS;
  tableSourceHTML = `
  <div class="advance-table search-table-header">
  <header class="table-heading search-header">
    <h4 class="table-title col-md-6">Search Filter</h4>

    <mat-form-field appearance="outline" class="col-md-6">
      <input matInput (keyup)="applyFilter($event)" placeholder="Ex. Mia">

    </mat-form-field>
  </header>

    <div class="mat-elevation-z8">
      <table class="col-md-12" mat-table [dataSource]="dataSource" matSort>

        <!-- ID Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
          <td mat-cell *matCellDef="let row"> {{row.id}} </td>
        </ng-container>

        <!-- Progress Column -->
        <ng-container matColumnDef="progress">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>
          <td mat-cell *matCellDef="let row"> {{row.progress}}% </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
          <td mat-cell *matCellDef="let row"> {{row.name}} </td>
        </ng-container>

        <!-- Color Column -->
        <ng-container matColumnDef="color">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>
          <td mat-cell *matCellDef="let row" [style.color]="row.color"> {{row.color}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;">
        </tr>
      </table>

      <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
    </div>
  </div>
  `;


  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private snackbar: SnackbarService) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };


}
