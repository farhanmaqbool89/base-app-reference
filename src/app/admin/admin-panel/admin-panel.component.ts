import {Component, Inject, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DataSource} from "@angular/cdk/table";
import {Observable, of, Subscription} from "rxjs";
import {CommonService} from "../services/common.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ConfirmationDialogService} from "../services/confirmation-dialog.service";
import {MAT_DIALOG_DATA} from "@angular/material";
import {HttpClient} from "@angular/common/http";


@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
            state('expanded', style({height: '*', visibility: 'visible'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class AdminPanelComponent implements OnInit{
    // displayedColumns = ['position', 'type', 'wallboardName', 'createdOn', 'createdBy', 'wallboards', 'active', 'link', 'edit','detail'];
    pendingWallboardColumn = ['position', 'type', 'wallboardName', 'createdOn', 'createdBy', 'active', 'level','link', 'edit','delete'];
    wallboardColumn = ['position', 'type', 'wallboardName', 'createdOn', 'createdBy', 'active', 'clone','link', 'edit', 'password','delete'];
    groupColumns = ['position', 'type', 'wallboardName', 'createdOn', 'createdBy', 'active', 'link', 'edit','delete','password', 'detail'];
    adminMain = ['position', 'type', 'wallboardName', 'createdOn', 'createdBy', 'active', 'link', 'detail'];
    dataSource = new ExampleDataSource();
    isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
    expandedElement: any;
    wallboard = false;
    group = false;
    main = true;
    pendingWallboard = false;
    checked = true;
    searchText;

    hero;

    manageData:any=[];
    groupList;
    subscriptionList: Subscription[] = [];
    changeDetector: any;

    constructor(public commonService: CommonService,
                private dialogService: ConfirmationDialogService,
                private httpClient: HttpClient
                ) {}

    ngOnInit() {
        this.commonService.hero
        console.log(this.commonService.hero);
        console.log('datasrcc',this.dataSource,);


        // const studentsObservable = this.studentservice.getStudents();
        // studentsObservable.subscribe((studentsData: Student[]) => {
        //     this.students = studentsData;
        // });
        this.getAdminWallboard();
    }
    onChange(value) {
        console.log('dd', value.checked)
        if (value.checked === true) {
            this.checked = true;
        } else {
            console.log(value); //0
            this.checked = false;

        }
    }
    getAdminWallboard() {

        // return this.getURL(`GetSRTypes?SRCategory=${category}&AgentId=${this.agentID}`);
        this.httpClient.get('http://localhost:3000/admin')
            .subscribe((res: any) => {
                    console.log("response :",res);

                    //  this._adminWallboardList.next(res);
                    this.manageData = res;
                    this.groupList = res.groupRow;
                    console.log("response Group:",this.groupList);

                },
                error => {
                    // this.snackbar.snackbarMessage('error-snackbar', "No MTTR Data Found" + error, 1);
                });

    }


    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.manageData, event.previousIndex, event.currentIndex);
    }
    ngOnChange(){
        this.commonService.hero
        console.log('change',this.commonService.hero);

    }

    deleteConfirm(){
        this.dialogService.openConfirmDialog('Delete Wallboard',
            'Are you sure you want to delete selected wallboard? Dashboard along with all widgets and data will be removed permanently.')
    }

    saveData(){
        this.dialogService.saveData('Save and Exit Wallboard',
            'Are you sure you want to exit creating wallboard? Your data and settings will be saved in dashboard and you may access it from the menu.')
    }
    confirm(){
        this.dialogService.notification('Incompatible Data File',
            'The data file you selected is incompatible with the selected widget. Please select a new file or widget.')
    }
}

export interface Element {
    position: number;
    type: string;
    wallboardName: string;
    createdOn: string;
    createdBy: string;
    wallboards: number;
    active: boolean;
    link: string;
    edit: any;
    detail: any;
    groupRow;
}

const data: Element[] = [
    {
        position: 1,
        type: 'template',
        wallboardName: 'Call and Customer Handling',
        createdOn: '12/04/2019',
        createdBy: 'Thomas Clark',
        wallboards: 1,
        active: true,
        link: ' ',
        edit: 'edit',
        detail: 'detail',
        groupRow: []
    },
    {
        position: 2,
        type: 'template',
        wallboardName: 'Team and Interaction Management',
        createdOn: '13/02/2019',
        createdBy: 'John Smith',
        wallboards: 1,
        active: true,
        link: ' ',
        edit: 'edit',
        detail: 'detail',
        groupRow: []

    },
    {
        position: 3, type: 'template', wallboardName: 'Team and Interaction Management', createdOn: '19/02/2019',
        createdBy: 'Farhan', wallboards: 1, active: true, link: ' ', edit: 'edit', detail: 'detail',  groupRow: []

    },
    {
        position: 4,
        type: 'group',
        wallboardName: 'Interaction Management',
        createdOn: '18/02/2019',
        createdBy: 'William Brown',
        wallboards: 1,
        active: true,
        link: ' ',
        edit: 'edit',
        detail: 'detail',
        groupRow: [
            {
                position: 1,
                type: 'template',
                wallboardName: 'Interaction Management',
                createdOn: '18/02/2019',
                createdBy: 'William Brown',
                wallboards: 1,
                active: true,
                link: '',
                edit: 'edit',
                detail: 'detail',
            },
            {
                position: 2,
                type: 'template',
                wallboardName: 'Interaction Management',
                createdOn: '18/02/2019',
                createdBy: 'William Brown',
                wallboards: 2,
                active: true,
                link: '',
                edit: 'edit',
                detail: 'detail'
            }
        ]
    },
    {
        position: 5,
        type: 'template',
        wallboardName: 'Call Details',
        createdOn: '27/01/2019',
        createdBy: 'Henry Wilson',
        wallboards: 1,
        active: true,
        link: ' ',
        edit: 'edit',
        detail: 'detail',
        groupRow: []

    },
    {
        position: 6,
        type: 'template',
        wallboardName: 'Team Performance ',
        createdOn: '125/01/2019',
        createdBy: 'Charles Miller',
        wallboards: 1,
        active: true,
        link: ' ',
        edit: 'edit',
        detail: 'detail',
        groupRow: []

    },
];

export class ExampleDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]> {
        const rows = [];
        data.forEach(element => rows.push(element, {detailRow: true, element}));
        console.log(rows);
        return of(rows);

    }

    disconnect() {
    }
}
