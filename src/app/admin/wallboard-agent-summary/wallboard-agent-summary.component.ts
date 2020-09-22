import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material";
import {GadgetSelectionComponent} from "../gadget-selection/gadget-selection.component";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-wallboard-agent-summary',
  templateUrl: './wallboard-agent-summary.component.html',
  styleUrls: ['./wallboard-agent-summary.component.scss']
})
export class WallboardAgentSummaryComponent {
  lineView = [570, 220];
    contact =  [{
        "id": "5725a6806acf030f9341e925",
        "name": "Helen",
        "lastName": "Sheridan",
        "avatar": "assets/images/avatars/Helen.jpg",
        "email": "helen@withinpixels.com",
        "phone": "+1-202-555-0163",
        "ext": "#333335",
        "currentState": "Talking",
        "stateDuration": "7:33",
        "answeredCalls": 31,
        "answeredCallRate": 51
    },{
        "id": "5725a680b3249760ea21de52",
        "name": "Abbott",
        "lastName": "Keitch",
        "phone": "+1-202-555-0175",
        "avatar": "assets/images/avatars/Abbott.jpg",
        "email": "abbott@withinpixels.com",
        "ext": "#269295",
        "currentState": "ready",
        "stateDuration": "10:59",
        "answeredCalls": 12,
        "answeredCallRate": 31
    },{
        "id": "5725a680606588342058356d",
        "name": "Arnold",
        "lastName": "Matlock",
        "avatar": "assets/images/avatars/Arnold.jpg",
        "email": "arnold@withinpixels.com",
        "phone": "+1-202-555-0141",
        "ext": "#269335",
        "currentState": "working",
        "stateDuration": "5:59",
        "answeredCalls": 14,
        "answeredCallRate": 42
    },
        {
            "id": "5725a68009e20d0a9e9acf2a",
            "name": "Barrera",
            "lastName": "Bradbury",
            "avatar": "assets/images/avatars/Barrera.jpg",
            "email": "barrera@withinpixels.com",
            "phone": "+1-202-555-0196",
            "ext": "#339335",
            "currentState": "Talking",
            "stateDuration": "7:33",
            "answeredCalls": 21,
            "answeredCallRate": 21
        },
        {
            "id": "5725a6809fdd915739187ed5",
            "name": "Blair",
            "lastName": "Strangeway",
            "avatar": "assets/images/avatars/Blair.jpg",
            "email": "blair@withinpixels.com",
            "phone": "+1-202-555-0118",
            "ext": "#339335",
            "currentState": "Talking",
            "stateDuration": "4:53",
            "answeredCalls": 21,
            "answeredCallRate": 32
        },
        {
            "id": "5725a68007920cf75051da64",
            "name": "Boyle",
            "lastName": "Winters",
            "avatar": "assets/images/avatars/Boyle.jpg",
            "email": "boyle@withinpixels.com",
            "phone": "+1-202-555-0177",
            "ext": "#339225",
            "currentState": "reserved",
            "stateDuration": "4:02",
            "answeredCalls": 7,
            "answeredCallRate": 41
        },
        {
            "id": "5725a68031fdbb1db2c1af47",
            "name": "Christy",
            "lastName": "Camacho",
            "avatar": "assets/images/avatars/Christy.jpg",
            "email": "christy@withinpixels.com",
            "phone": "+1-202-555-0136",
            "ext": "#439225",
            "currentState": "ready",
            "stateDuration": "6:02",
            "answeredCalls": 8,
            "answeredCallRate": 11
        },
        {
            "id": "5725a680bc670af746c435e2",
            "name": "Copeland",
            "lastName": "Redcliff",
            "avatar": "assets/images/avatars/Copeland.jpg",
            "email": "copeland@withinpixels.com",
            "phone": "+1-202-555-0107",
            "ext": "#139325",
            "currentState": "notReady",
            "stateDuration": "4:02",
            "answeredCalls": 9,
            "answeredCallRate": 33
        },
        {
            "id": "5725a680e7eb988a58ddf303",
            "name": "Estes",
            "lastName": "Stevens",
            "avatar": "assets/images/avatars/Estes.jpg",
            "email": "estes@withinpixels.com",
            "phone": "+1-202-555-0113",
            "ext": "#339225",
            "currentState": "reserved",
            "stateDuration": "4:02",
            "answeredCalls": 7,
            "answeredCallRate": 41
        },
        {
            "id": "5725a680dcb077889f758961",
            "name": "Harper",
            "lastName": "MacGuffin",
            "avatar": "assets/images/avatars/Harper.jpg",
            "email": "harper@withinpixels.com",
            "phone": "+1-202-555-0173",
            "ext": "#339335",
            "currentState": "Talking",
            "stateDuration": "7:33",
            "answeredCalls": 21,
            "answeredCallRate": 21
        },
    ];

    constructor(private http: HttpClient,private userService: UserService,
                private dialog: MatDialog) {

    }
    ngOnInit() {
        // this.getContacts();
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

 }
