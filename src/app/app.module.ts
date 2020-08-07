import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {routes} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './authentication/component/signup/signup.component';
import { ResetPasswordComponent } from './authentication/component/reset-password/reset-password.component';
import {LoginComponent} from "./authentication/component/login/login.component";
import {ConfirmDialogComponent} from "./admin/components/confirm-dialog/confirm-dialog.component";
import {AdminPanelComponent} from "./admin/admin-panel/admin-panel.component";
import {HighlightModule} from "ngx-highlightjs";
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
export function hljsLanguages() {
    return [
        {name: 'typescript', func: typescript},
        {name: 'scss', func: scss},
        {name: 'xml', func: xml}
    ];
}
@NgModule({
    declarations: [
        MainComponent,
        SignupComponent,
        ResetPasswordComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AdminModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        HighlightModule.forRoot({
            languages: hljsLanguages
        })
    ],
    providers: [
        HttpClientModule
    ],
    bootstrap: [MainComponent],
    entryComponents:[AdminPanelComponent,ConfirmDialogComponent]
})
export class AppModule {
}
