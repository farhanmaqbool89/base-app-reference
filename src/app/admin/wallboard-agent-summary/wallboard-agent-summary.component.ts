import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material";
import {GadgetSelectionComponent} from "../gadget-selection/gadget-selection.component";

@Component({
  selector: 'app-wallboard-agent-summary',
  templateUrl: './wallboard-agent-summary.component.html',
  styleUrls: ['./wallboard-agent-summary.component.scss']
})
export class WallboardAgentSummaryComponent {
  lineView = [570, 220];
    contact: any;

    constructor(private userService: UserService,
                private dialog: MatDialog) {

    }
    ngOnInit() {
        this.getContacts();
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(GadgetSelectionComponent, {
            width: '700px',
            autoFocus: false,
            closeOnNavigation: true,
            disableClose: true,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });

    }

    getContacts() {
        this.userService.getUserInfo()
            .subscribe(res => {
                    this.contact = res;
                    console.log(this.contact)

                },
                error => {
                    console.log('there is an error in User Info');
                    //   this.isUpdating = false;
                });
    }
}
