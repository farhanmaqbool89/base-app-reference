import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {SnackbarService} from "../../services/snackbar.service";
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contact: any;
    codeView = false;

    contactFormHTML = `
    <div class="table-responsive contact-info">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr *ngFor="let contacts of contact">
                                        <td><img src="{{contacts.avatar}}" class="img-thumbnail"></td>
                                        <td>{{contacts.name}}</td>
                                        <td>{{contacts.email}}</td>
                                        <td>{{contacts.phone}}</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
    `;
    contactFormTS = `

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contact =  [
        {
            "id": "5725a680b3249760ea21de52",
            "name": "Abbott",
            "lastName": "Keitch",
            "phone": "+1-202-555-0175",
            "avatar": "assets/images/avatars/Abbott.jpg",
            "email": "abbott@withinpixels.com",
            "address": "933 8th Street Stamford, CT 06902",
            "ext": "#269295",
            "currentState": "ready",
            "stateDuration": "10:59",
            "answeredCalls": 12,
            "answeredCallRate": 31
        },
        ];

    constructor() {

    }

    ngOnInit() {
    }

} 
    `;


    constructor(private http: HttpClient, private userService: UserService, private snackbar: SnackbarService) {

    }

    ngOnInit() {
        this.getContacts();
    }

    getContacts() {
        // this.userService.getUserInfo()
        //     .subscribe(res => {
        //             this.contact = res;
        //             console.log(this.contact)
        //
        //         },
        //         error => {
        //             console.log('there is an error in User Info');
        //             //   this.isUpdating = false;
        //         });

        this.http.get('../../../assets/contacts.json').subscribe((res: any) => {
            console.log(`ConfigService [readConfiguration] data = [${JSON.stringify(res.user)}]`);
            this.contact = res.fullInfo;

        }, (error) => {
            console.log(`ConfigService [readConfiguration] error occurred [${JSON.stringify(error)}]`);
        });
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
