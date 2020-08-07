import {Routes} from "@angular/router";
import {AdminMainComponent} from "./admin-main/admin-main.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {FormsComponent} from "./components/form-controls/forms/forms.component";
import {AutocompleteComponent} from "./components/form-controls/autocomplete/autocomplete.component";
import {CheckboxComponent} from "./components/form-controls/checkbox/checkbox.component";
import {DatepickerComponent} from "./components/form-controls/datepicker/datepicker.component";
import {InputComponent} from "./components/form-controls/input/input.component";
import {RadioComponent} from "./components/form-controls/radio/radio.component";
import {SliderComponent} from "./components/form-controls/slider/slider.component";
import {SelectComponent} from "./components/form-controls/select/select.component";
import {SlideToggleComponent} from "./components/form-controls/slide-toggle/slide-toggle.component";
import {BasicTableComponent} from "./components/table/basic-table/basic-table.component";
import {AdvanceTablesComponent} from "./components/table/advance-tables/advance-tables.component";
import {CardComponent} from "./components/layout/card/card.component";
import {DividerComponent} from "./components/layout/divider/divider.component";
import {GridListComponent} from "./components/layout/grid-list/grid-list.component";
import {TreeComponent} from "./components/layout/tree/tree.component";
import {ListComponent} from "./components/layout/list/list.component";
import {ExpansionPanelComponent} from "./components/layout/expansion-panel/expansion-panel.component";
import {StepperComponent} from "./components/layout/stepper/stepper.component";
import {TabsComponent} from "./components/layout/tabs/tabs.component";
import {ButtonsComponent} from "./components/buttons-indicators/buttons/buttons.component";
import {ToggleBadgesComponent} from "./components/buttons-indicators/toggle-badges/toggle-badges.component";
import {ProgressComponent} from "./components/buttons-indicators/progress/progress.component";
import {ChipsIconsComponent} from "./components/buttons-indicators/chips-icons/chips-icons.component";
import {BottomSheetComponent} from "./components/popups-modals/bottom-sheet/bottom-sheet.component";
import {DialogComponent} from "./components/popups-modals/dialog/dialog.component";
import {SnackbarTooltipComponent} from "./components/popups-modals/snackbar-tooltip/snackbar-tooltip.component";
import {MenuComponent} from "./components/navigation/menu/menu.component";
import {ToolbarComponent} from "./components/navigation/toolbar/toolbar.component";
import {ContactComponent} from "./components/contact/contact.component";
// import {ManageGroupComponent} from "./admin-panel/manage-group/manage-group.component";
// import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
// import {TemplateStepsComponent} from "./template-steps/template-steps.component";
// import {SelectTemplateTypeComponent} from "./select-template-type/select-template-type.component";
// import {GadgetSelectionComponent} from "./gadget-selection/gadget-selection.component";
// import {TemplateSelectionComponent} from "./template-selection/template-selection.component";
// import {PieChartComponent} from "@swimlane/ngx-charts";
// import {PieChartComponent} from "./components/charts/pie-chart/pie-chart.component";
// import {ChartLineComponent} from "./components/charts/chart-line/chart-line.component";
// import {ChartGaugeComponent} from "./components/charts/chart-gauge/chart-gauge.component";
// import {ChartGridComponent} from "./components/charts/chart-grid/chart-grid.component";
// import {TemplateSelectionComponent} from "./template-selection/template-selection.component";
// import {GadgetSelectionComponent} from "./gadget-selection/gadget-selection.component";
// import {SelectTemplateTypeComponent} from "./select-template-type/select-template-type.component";
// import {TemplateStepsComponent} from "./template-steps/template-steps.component";
// import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
// import {ManageGroupComponent} from "./admin-panel/manage-group/manage-group.component";

export const adminRoutes: Routes = [
    {
        path: '', component: AdminMainComponent,
        children: [
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: MainPageComponent},
            {path: 'form-controls/forms', component: FormsComponent},
            {path: 'form-controls/autocomplete', component: AutocompleteComponent},
            {path: 'form-controls/checkbox', component: CheckboxComponent},
            {path: 'form-controls/datepicker', component: DatepickerComponent},
            {path: 'form-controls/input', component: InputComponent},
            {path: 'form-controls/radio', component: RadioComponent},
            {path: 'form-controls/select', component: SelectComponent},
            {path: 'form-controls/slider', component: SliderComponent},
            {path: 'form-controls/slide-toggle', component: SlideToggleComponent},
            {path: 'tables/basic-tables', component: BasicTableComponent},
            {path: 'tables/advance-tables', component: AdvanceTablesComponent},
            {path: 'layout/cards', component: CardComponent},
            {path: 'layout/divider', component: DividerComponent},
            {path: 'layout/grid-list', component: GridListComponent},
            {path: 'layout/expansion-panel', component: ExpansionPanelComponent},
            {path: 'layout/list', component: ListComponent},
            {path: 'layout/stepper', component: StepperComponent},
            {path: 'layout/tabs', component: TabsComponent},
            {path: 'layout/tree', component: TreeComponent},
            {path: 'buttons-indicators/buttons', component: ButtonsComponent},
            {path: 'buttons-indicators/toggle-badges', component: ToggleBadgesComponent},
            {path: 'buttons-indicators/progress', component: ProgressComponent},
            {path: 'buttons-indicators/chips-icons', component: ChipsIconsComponent},
            {path: 'popup-modal/bottom-sheet', component: BottomSheetComponent},
            {path: 'popup-modal/dialog', component: DialogComponent},
            {path: 'popup-modal/snackbar-tooltip', component: SnackbarTooltipComponent},
            {path: 'navigation/menu', component: MenuComponent},
            {path: 'navigation/toolbar', component: ToolbarComponent},
            {path: 'pages/contacts', component: ContactComponent},
            // {path: 'piechart', component: PieChartComponent},
            // {path: 'linechart', component: ChartLineComponent},
            // {path: 'chartgauge', component: ChartGaugeComponent},
            // {path: 'gridchart', component: ChartGridComponent},
            // {path: 'template-selection', component: TemplateSelectionComponent},
            // {path: 'gadget-selection', component: GadgetSelectionComponent},
            // {path: 'select-template', component: SelectTemplateTypeComponent},
            // {path: 'create-template', component: TemplateStepsComponent},
            // {path: 'admin', component: AdminPanelComponent},
            // {path: 'manage-group', component: ManageGroupComponent},
        ]
    }
];
