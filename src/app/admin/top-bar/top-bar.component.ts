import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  today = new Date();

  constructor(private changeDetector: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.clock();
  }
  clock() {
    this.today = new Date();
    let timeoutId = setInterval(() => {
      this.today = new Date();
      this.changeDetector.detectChanges();
    }, 1000);

  }
}


