import { AssignedPasswordDialogComponent } from './../assigned-password-dialog/assigned-password-dialog.component';
import { AdminService } from '../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-support-team-member',
  templateUrl: './add-support-team-member.component.html',
  styleUrls: ['./add-support-team-member.component.scss']
})
export class AddSupportTeamMemberComponent implements OnInit {
  errorMessage = "";
  assignedPassword = "";
  showLoadingEndicator = false;


  supportMemberForm: FormGroup;

  constructor(
    private _adminService: AdminService,
    private _authService: AuthService,
    _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    public dialogRef: MatDialogRef<AddSupportTeamMemberComponent>
  ) {

    this.supportMemberForm = _formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      EmailAddress: ["", [Validators.required, Validators.email]],
    });
  }

  get FirstName() {
    return this.supportMemberForm.get('FirstName');
  }

  get LastName() {
    return this.supportMemberForm.get('LastName');
  }


  get EmailAddress() {
    return this.supportMemberForm.get('EmailAddress');
  }



  ngOnInit(): void {
  }

  onSubmit() {

    this.errorMessage = "";
    if (this.supportMemberForm.valid) {

      this._adminService.addSupportmember(this.supportMemberForm.value)
        .subscribe(event => {
          if (event.type === HttpEventType.Sent) {
            this.showLoadingEndicator = true;
          }
          if (event.type === HttpEventType.Response) {
            this.showLoadingEndicator = false;
            this.openSnackBar("Add Support Member", "Success!", 2000);
            this.assignedPassword = event.body['password'];

            let passwordDialofRef = this._dialog.open(AssignedPasswordDialogComponent, {
              width: "650px",
              height: "auto",
              data: {
                assignedPassword: this.assignedPassword,
                emailAddress: this.EmailAddress.value
              }
            });
            passwordDialofRef.afterClosed().subscribe(res => {
              this.closeDialog();
            });

          }
        },
          error => {
            this.showLoadingEndicator = false;
            this.errorMessage = error.error.message;
          })
    }
  }

  private closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }

}
