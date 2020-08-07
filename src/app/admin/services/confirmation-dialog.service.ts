import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../components/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(heading, msg){
   return this.dialog.open(ConfirmDialogComponent,{
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        heading: heading,
        message: msg,
        text: 'confirm'

      }
    })
  }

  notification(heading, msg){
   return this.dialog.open(ConfirmDialogComponent,{
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        heading: heading,
        message: msg,
        text: 'notification'
      }
    })
  }

  saveData(heading, msg){
   return this.dialog.open(ConfirmDialogComponent,{
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        heading: heading,
        message: msg,
        text: 'savedata'

      }
    })
  }
}
