import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {CommonService} from "../services/common.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin-main',
    templateUrl: './admin-main.component.html',
    styleUrls: ['./admin-main.component.scss']
})

export class AdminMainComponent implements OnInit, OnDestroy {
    @ViewChild('sidenav') sidenav: MatSidenav;
    @Input() themeChange: string;

    wallBoardApp = true;
    hero;
    elem;
    // document;
    events: string[] = [];
    opened = false;
    otherTheme = false;
    status: boolean = false;
    fontSize = false;

    constructor(
        private commonService: CommonService,
        private router: Router,
        private changeDetector: ChangeDetectorRef) {
        // this.commonService.themeVersion()
        //     .subscribe( res => {
        //       this.changeTheme();
        //     })

    }

    ngOnInit() {
        this.elem = document.documentElement;


        this.commonService.themeVersion.subscribe((data) => {
            console.log(data);
            this.changeTheme();
        });
    }

    changeTheme() {
        this.otherTheme = !this.otherTheme;
    }
    changeFontSize() {
        this.fontSize = !this.fontSize;
    }

    reason = '';

    barStatus = false;

    clickEvent() {
        this.barStatus = !this.barStatus;
    }

    close(reason: string) {
        this.reason = reason;
        this.sidenav.close();
    }


    manageWallboard(e) {
        this.router.navigate(['/admin'], (e));
        this.hero = e;
        this.commonService.hero = this.hero;
        this.changeDetector.detectChanges();

    }

    ngOnDestroy() {
    }

    onKeydown(event) {
        this.status = !this.status;
        console.log('event', this.status);

        if (this.status == true) {
            var methodToBeInvoked = this.elem.requestFullscreen ||
                this.elem.webkitRequestFullScreen || this.elem['mozRequestFullscreen']
                ||
                this.elem['msRequestFullscreen'];
        } else {
            if (document['exitFullscreen']) {
                document['exitFullscreen']();
            } else if (document['webkitExitFullscreen']) {
                document['webkitExitFullscreen']();
            } else if (document['mozCancelFullScreen']) {
                document['mozCancelFullScreen']();
            } else if (document['msExitFullscreen']) {
                document['msExitFullscreen']();
            }
        }
        if (methodToBeInvoked)
            methodToBeInvoked.call(this.elem);
    };


}
