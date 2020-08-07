import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-toggle-badges',
  templateUrl: './toggle-badges.component.html',
  styleUrls: ['./toggle-badges.component.scss']
})
export class ToggleBadgesComponent implements OnInit {

  badgesView = false;
  togleView = false;
  badgesSource = `
  <p>
  <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
</p>

<p>
  Button with a badge on the left
  <button mat-raised-button color="primary"
      matBadge="8" matBadgePosition="before" matBadgeColor="accent">
    Action
  </button>
</p>

<p>
  Icon with a badge
  <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
    <!-- Include text description of the icon's meaning for screen-readers -->
    <span class="cdk-visually-hidden">
      Example with a home icon with overlaid badge showing the number 15
    </span>
</p>
  `;
  toggleSource = `
  <mat-button-toggle-group #group="matButtonToggleGroup">
    <mat-button-toggle value="left" aria-label="Text align left">
      <mat-icon>format_align_left</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="center" aria-label="Text align center">
      <mat-icon>format_align_center</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="right" aria-label="Text align right">
      <mat-icon>format_align_right</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="justify" disabled aria-label="Text align justify">
      <mat-icon>format_align_justify</mat-icon>
    </mat-button-toggle>
</mat-button-toggle-group>
<p>Selected value: {{group.value}}</p>
  `;

  constructor(private snackbar: SnackbarService) { }

  ngOnInit() {
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
