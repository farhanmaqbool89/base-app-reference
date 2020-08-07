import {Routes} from "@angular/router";
import {LoginComponent} from "./authentication/component/login/login.component";
import {ResetPasswordComponent} from "./authentication/component/reset-password/reset-password.component";
import {SignupComponent} from "./authentication/component/signup/signup.component";

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'reset-password', component: ResetPasswordComponent},

];

