import {Component,OnInit} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import {gaugeData, lineChartData, barChartWeeklyData, gaugeChartData} from "../data";
import {MatDialog} from "@angular/material";
import {GadgetSelectionComponent} from "../gadget-selection/gadget-selection.component";
@Component({
  selector: 'app-wallboard-main',
  templateUrl: './wallboard-main.component.html',
  styleUrls: ['./wallboard-main.component.scss']
})
export class WallboardMainComponent implements OnInit {

  lineChartData = lineChartData;
  barWeeklyData = barChartWeeklyData;
  gaugeChartDat = gaugeChartData;
  gValue;
  gaugeLegendValue;

  pieChartData = [

    {
      "name": "Working",
      "value": 632
    },
    {
      "name": "Ready",
      "value": 737
    },
    {
      "name": "Not Ready",
      "value": 674
    },
    {
      "name": "Talking",
      "value": 240
    }

  ];
  gaugeDataFixedValue = 200;
  gaugeDataCurrentValue = 64;
  gaugeDataValue;
  theme = 'light';
  view: any[] = [400, 300];
  viewGauge: any[] = [400, 250];
  barView: any[] = [400, 212];
  lineView: any[] = [400, 260];


  // options
  legendPosition = "top";
  public innerWidth: any;

  colorScheme = {
    domain: ['#4FC3F8', '#8BC44A', '#E74C3C', '#E67E22']
  };
  safeTransform;
  constructor(private sanitizer: DomSanitizer,
              private dialog: MatDialog) {
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
  ngOnInit(){

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth > 1440 && this.innerWidth <= 1600){
      this.barView = [480, 400];
      this.view = [480, 400];
      this.viewGauge = [480, 400];
      this.lineView = [480, 400];

    }else if (this.innerWidth > 1600){
      this.barView = [];
      this.view = [];
      this.viewGauge = [];
      this.lineView = [];

    }

    this.gaugeLegendValue = this.gaugeDataCurrentValue *100 / this.gaugeDataFixedValue
    this.gaugeDataValue = this.gaugeDataCurrentValue *100 / this.gaugeDataFixedValue * 2 / 1.11
    this.gValue = `rotate(${this.gaugeDataValue}deg)`
    console.log(this.gaugeDataValue);

  }
  get myTransform(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.gValue);
  }

}
