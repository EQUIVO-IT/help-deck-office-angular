import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assigned-password-dialog',
  templateUrl: './assigned-password-dialog.component.html',
  styleUrls: ['./assigned-password-dialog.component.scss']
})
export class AssignedPasswordDialogComponent implements OnInit {

  emailAddress = "";
  assignedPassword = "";
  constructor(
     public dialogRef: MatDialogRef<AssignedPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dataFromParent: any,
  ) {
    this.emailAddress = dataFromParent.emailAddress;
    this.assignedPassword = dataFromParent.assignedPassword;
  }

  ngOnInit(): void {
  }

}
