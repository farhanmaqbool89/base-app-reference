export var basicSelectHTML = `
            <p><strong>Basic mat select</strong></p>
              <div class="form-group">
                <mat-form-field appearance="outline">
                  <mat-select placeholder="Favorite food">
                    <mat-option *ngFor="let food of foods" [value]="food.value">
                      {{food.viewValue}}
                    </mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
              <div class="clearfix"></div>
              <p><strong>Basic native select</strong></p>
              <div class="form-group">
                <mat-form-field appearance="outline">
                  <select matNativeControl required>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </mat-form-field>
              </div>`;


export var basicSelectTS = `
  import {Component} from '@angular/core';

interface Food {
                      value: string;
                      viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
                      selector: 'select-overview-example',
                      templateUrl: 'select-overview-example.html',
                      styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
                      foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
                          {value: 'pizza-1', viewValue: 'Pizza'},
                      {value: 'tacos-2', viewValue: 'Tacos'}
                          ];
                          }` ;

//Select With Two-way binding

export var twoWaySelectBindingHTML = `<mat-form-field appearance="outline">
<mat-label>Select an option</mat-label>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<p>You selected: { { selected }}</p>`;

export var twoWaySelectBindingTS = `import {Component} from '@angular/core';

/** @title Select with 2-way value binding */
@Component({
                                  selector: 'select-value-binding-example',
                                  templateUrl: 'select-value-binding-example.html',
                                  styleUrls: ['select-value-binding-example.css'],
})
export class SelectValueBindingExample {
                                  selected = 'option2';
}`;

//Form Select

export var formSelectHTML = `<p><strong>Basic mat select</strong></p>
<mat-form-field appearance="outline">
  <mat-label>Favorite food</mat-label>
  <mat-select>
    <mat-option *ngFor="let food of foods" [value]="food.value">
                    { { food.value } }
    </mat-option>
  </mat-select>
</mat-form-field>
                    
<p><strong>Basic native select</strong></p>

<mat-form-field>
  <mat-label>Cars</mat-label>
  <select matNativeControl required>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`;

export var formSelectTS = `import {Component} from '@angular/core';

interface Food {
                      value: string;
                      viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
                      selector: 'select-overview-example',
                      templateUrl: 'select-overview-example.html',
                      styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
                      foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
                          {value: 'pizza-1', viewValue: 'Pizza'},
                      {value: 'tacos-2', viewValue: 'Tacos'}
                          ];
                          }
`;



//Expansion Panel

export var simpleExpansionPanel = `
<mat-accordion>
                                <mat-expansion-panel>
                                    <mat-expansion-panel-header>
                                        <mat-panel-title>
                                            Personal data
                                        </mat-panel-title>
                                        <mat-panel-description>
                                            Type your name and age
                                        </mat-panel-description>
                                    </mat-expansion-panel-header>

                                    <mat-form-field appearance="outline" class="col-md-12">
                                        <input matInput placeholder="First name">
                                    </mat-form-field>

                                    <mat-form-field appearance="outline" class="col-md-12">
                                        <input matInput placeholder="Age">
                                    </mat-form-field>
                                </mat-expansion-panel>
                                <mat-expansion-panel (opened)="panelOpenState = true"
                                                     (closed)="panelOpenState = false">
                                    <mat-expansion-panel-header>
                                        <mat-panel-title>
                                            Self aware panel
                                        </mat-panel-title>
                                        <mat-panel-description>
                                            Currently I am {{panelOpenState ? 'open' : 'closed'}}
                                        </mat-panel-description>
                                    </mat-expansion-panel-header>
                                    <p>I'm visible because I am open</p>
                                </mat-expansion-panel>
                            </mat-accordion>

`;



export var accordionPanel = `

<mat-accordion class="accordion-main">
    <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle>
        <mat-expansion-panel-header>
            <mat-panel-title>
                Personal data
            </mat-panel-title>
            <mat-panel-description>
                Type your name and age
                <mat-icon>account_circle</mat-icon>
            </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field class="col-md-6 col-sm-12" appearance="outline">
            <mat-label>First name</mat-label>
            <input matInput>
        </mat-form-field>

        <mat-form-field class="col-md-6 col-sm-12"  appearance="outline">
            <mat-label>Age</mat-label>
            <input matInput type="number" min="1">
        </mat-form-field>

        <mat-action-row>
            <button mat-button color="primary" (click)="nextStep()">Next</button>
        </mat-action-row>
    </mat-expansion-panel>

    <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle>
        <mat-expansion-panel-header>
            <mat-panel-title>
                Destination
            </mat-panel-title>
            <mat-panel-description>
                Type the country name
                <mat-icon>map</mat-icon>
            </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field class="col-md-6 col-sm-12"  appearance="outline">
            <mat-label>Country</mat-label>
            <input matInput>
        </mat-form-field>

        <mat-action-row>
            <button mat-button color="warn" (click)="prevStep()">Previous</button>
            <button mat-button color="primary" (click)="nextStep()">Next</button>
        </mat-action-row>
    </mat-expansion-panel>

    <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle>
        <mat-expansion-panel-header>
            <mat-panel-title>
                Day of the trip
            </mat-panel-title>
            <mat-panel-description>
                Inform the date you wish to travel
                <mat-icon>date_range</mat-icon>
            </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field class="col-md-6 col-sm-12"  appearance="outline">
            <mat-label>Date</mat-label>
            <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly>
        </mat-form-field>
        <mat-datepicker #picker></mat-datepicker>

        <mat-action-row>
            <button mat-button color="warn" (click)="prevStep()">Previous</button>
            <button mat-button color="primary" (click)="nextStep()">End</button>
        </mat-action-row>
    </mat-expansion-panel>

</mat-accordion>


`

export var gridColumn = `
<div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
</div>

<div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
</div>

<div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-8">.col-md-8</div>
</div>

<div class="row">
    <div class="col-md-6">.col-md-6</div>
    <div class="col-md-6">.col-md-6</div>
</div>

<div class="row">
    <div class="col-md-12">.col-md-12</div>
</div>

`;

export var offsettingGrid = `
<div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>

<div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>

<div class="row">
    <div class="col-md-6 offset-md-3">
        .col-md-6 .offset-md-3
    </div>
</div>

`;

export var advanceTableTS = `
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

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
  
  
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
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
`;

export var  actionTable = `
<div class="table-responsive">
    <table class="table mb-none">
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td class="actions">
                <span class="edit-row"><i class="material-icons">edit</i></span>
                <span class="delete-row"><i class="material-icons">delete</i></span>
            </td>
        </tr>
        </tbody>
    </table>
</div>
`;
export var hoverTable = `
<div class="table-responsive">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        </tbody>
    </table>
 </div>

`;
export var stripdTable = `
<div class="table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        </tbody>
    </table>
 </div>
`;
export var defaultTable = `
<div class="table-responsive">
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        </tbody>
    </table>
</div>
`;

export var testDialog = `
<div class="custom-dialog">
        <h2 mat-dialog-title>Install Angular</h2>
        <mat-dialog-content class="mat-typography">
            <h3>Develop across all platforms</h3>
            <p>Learn one way to build applications with Angular and reuse your code and abilities to build
                apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>

            <h3>Speed &amp; Performance</h3>
            <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
                Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
                data requirements by building data models on RxJS, Immutable.js or another push-model.</p>

            <h3>Incredible tooling</h3>
            <p>Build features quickly with simple, declarative templates. Extend the template language with
                your own components and use a wide array of existing components. Get immediate Angular-specific
                help and feedback with nearly every IDE and editor. All this comes together so you can focus
                on building amazing apps rather than trying to make the code work.</p>

            <h3>Loved by millions</h3>
            <p>From prototype through global deployment, Angular delivers the productivity and scalable
                infrastructure that supports Google's largest applications.</p>

            <h3>What is Angular?</h3>

            <p>Angular is a platform that makes it easy to build applications with the web. Angular
                combines declarative templates, dependency injection, end to end tooling, and integrated
                best practices to solve development challenges. Angular empowers developers to build
                applications that live on the web, mobile, or the desktop</p>

            <h3>What is Angular?</h3>

            <p>Angular is a platform that makes it easy to build applications with the web. Angular
                combines declarative templates, dependency injection, end to end tooling, and integrated
                best practices to solve development challenges. Angular empowers developers to build
                applications that live on the web, mobile, or the desktop</p>

        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button mat-dialog-close>Cancel</button>
            <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
        </mat-dialog-actions>

    </div>
`;

