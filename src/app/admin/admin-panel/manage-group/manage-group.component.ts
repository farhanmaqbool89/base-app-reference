import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {CommonService} from "../../services/common.service";
import {ConfirmationDialogService} from "../../services/confirmation-dialog.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'app-manage-group',
    templateUrl: './manage-group.component.html',
    styleUrls: ['./manage-group.component.scss']
})
export class ManageGroupComponent implements OnInit {
    wallboard = false;
    group = false;
    main = true;
    pendingWallboard = false;
    checked = true;
    manageData: any = [];
    groupList;

    constructor(public commonService: CommonService,
                private dialogService: ConfirmationDialogService,
                private httpClient: HttpClient,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.getAdminWallboard();
    }

    getAdminWallboard() {
        this.httpClient.get('http://localhost:3000/admin')
            .subscribe((res: any) => {
                    console.log("response :", res);

                    //  this._adminWallboardList.next(res);
                    this.manageData = res;

                },
                error => {
                    // this.snackbar.snackbarMessage('error-snackbar', "No MTTR Data Found" + error, 1);
                });

    }

    openModal(templateRef) {
        let dialogRef = this.dialog.open(templateRef, {
            width: '450px',
            panelClass: 'confirm-dialog-container',
            disableClose: true,
            // data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    onClose() {
        this.dialog.closeAll()
    }


    drop(event: CdkDragDrop<string[]>) {
        for (let i = 0; i < this.manageData.length; i++) {
            if (this.manageData[i].groupRow.length > 0) {
                this.groupList = this.manageData[i].groupRow;
                moveItemInArray(this.groupList, event.previousIndex, event.currentIndex);

            }
        }
    }
}
