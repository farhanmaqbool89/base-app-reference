
import {SharedModule} from "../shared/shared.module";

import { MainbarComponent } from './sidebar/mainbar/mainbar.component';
import {adminRoutes} from "./admin.routes";
import {AdminMainComponent} from "./admin-main/admin-main.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsComponent } from './components/form-controls/forms/forms.component';
import { AutocompleteComponent } from './components/form-controls/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/form-controls/checkbox/checkbox.component';
import { DatepickerComponent } from './components/form-controls/datepicker/datepicker.component';
import { InputComponent } from './components/form-controls/input/input.component';
import { RadioComponent } from './components/form-controls/radio/radio.component';
import { SliderComponent } from './components/form-controls/slider/slider.component';
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { SelectComponent } from './components/form-controls/select/select.component';
import { SlideToggleComponent } from './components/form-controls/slide-toggle/slide-toggle.component';
import { BasicTableComponent } from './components/table/basic-table/basic-table.component';
import { AdvanceTablesComponent } from './components/table/advance-tables/advance-tables.component';
import { CardComponent } from './components/layout/card/card.component';
import { StepperComponent } from './components/layout/stepper/stepper.component';
import { TreeComponent } from './components/layout/tree/tree.component';
import { TabsComponent } from './components/layout/tabs/tabs.component';
import { ListComponent } from './components/layout/list/list.component';
import { GridListComponent } from './components/layout/grid-list/grid-list.component';
import { ExpansionPanelComponent } from './components/layout/expansion-panel/expansion-panel.component';
import { DividerComponent } from './components/layout/divider/divider.component';
import { ButtonsComponent } from './components/buttons-indicators/buttons/buttons.component';
import { ToggleBadgesComponent } from './components/buttons-indicators/toggle-badges/toggle-badges.component';
import { ProgressComponent } from './components/buttons-indicators/progress/progress.component';
import { ChipsIconsComponent } from './components/buttons-indicators/chips-icons/chips-icons.component';
import { BottomSheetComponent } from './components/popups-modals/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './components/popups-modals/dialog/dialog.component';
import { SnackbarTooltipComponent } from './components/popups-modals/snackbar-tooltip/snackbar-tooltip.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {HttpClientModule} from "@angular/common/http";
import {ContactComponent} from "./components/contact/contact.component";
import { WallboardMainComponent } from './wallboard-main/wallboard-main.component';
import { WallboardAgentSummaryComponent } from './wallboard-agent-summary/wallboard-agent-summary.component';
import { TemplateSelectionComponent } from './template-selection/template-selection.component';
import { GadgetSelectionComponent } from './gadget-selection/gadget-selection.component';
import { SelectTemplateTypeComponent } from './select-template-type/select-template-type.component';
import { TemplateStepsComponent } from './template-steps/template-steps.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManageGroupComponent } from './admin-panel/manage-group/manage-group.component';
import {SnackbarService} from "./services/snackbar.service";
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
    imports: [
        SharedModule,
        RouterModule.forRoot(adminRoutes),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HighlightModule.forRoot({
            languages: hljsLanguages
        })

    ],
    declarations: [
        AdminMainComponent,
        MainbarComponent,
        TopBarComponent,
        MainPageComponent,
        FormsComponent,
        AutocompleteComponent,
        CheckboxComponent,
        DatepickerComponent,
        InputComponent,
        RadioComponent,
        SliderComponent,
        SelectComponent,
        SlideToggleComponent,
        BasicTableComponent,
        AdvanceTablesComponent,
        CardComponent,
        StepperComponent,
        TreeComponent,
        TabsComponent,
        ListComponent,
        GridListComponent,
        ExpansionPanelComponent,
        DividerComponent,
        ButtonsComponent,
        ToggleBadgesComponent,
        ProgressComponent,
        ChipsIconsComponent,
        BottomSheetComponent,
        DialogComponent,
        SnackbarTooltipComponent,
        MenuComponent,
        ToolbarComponent,
        ConfirmDialogComponent,
        ContactComponent,
        WallboardMainComponent,
        WallboardAgentSummaryComponent,
        TemplateSelectionComponent,
        GadgetSelectionComponent,
        SelectTemplateTypeComponent,
        TemplateStepsComponent,
        AdminPanelComponent,
        ManageGroupComponent
    ],
    providers: [
        HttpClientModule,
        ContactComponent,
        SnackbarService
    ],
    exports: [],

    entryComponents: [

    ],

})
export class AdminModule {

}
