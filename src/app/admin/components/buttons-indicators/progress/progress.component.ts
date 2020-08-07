import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  simpleBar = false;
  simpleSpinner = false;
  configurableSpinnerBar = false;

  constructor(private snackbar: SnackbarService) { }

  ngOnInit() {
  }

    copyText(val: string) {
        const codeCopy = document.createElement('textarea');
        codeCopy.value = val.trim();
        document.body.appendChild(codeCopy);
        codeCopy.focus();
        codeCopy.select();
        document.execCommand('copy');
        document.body.removeChild(codeCopy);
        codeCopy.value = val
        if (codeCopy.value === val) {
            this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


        }
    }

}
