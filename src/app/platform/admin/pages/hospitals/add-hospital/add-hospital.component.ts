import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { AdminService } from '../../../styles/admin.service';
import { AssignedPasswordDialogComponent } from '../../support-team/assigned-password-dialog/assigned-password-dialog.component';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {
  errorMessage = "";
  showLoadingEndicator = false;

  hospitalFrom: FormGroup;

  constructor(
    private _adminService: AdminService,
    private _authService: AuthService,
    _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    public dialogRef: MatDialogRef<AddHospitalComponent>
  ) {

    this.hospitalFrom = _formBuilder.group({
      Name: ["", Validators.required],
    });
  }

  get Name() {
    return this.hospitalFrom.get('Name');
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.errorMessage = "";
    if (this.hospitalFrom.valid) {

      this._adminService.addHospital(this.hospitalFrom.value)
        .subscribe(event => {
          if (event.type === HttpEventType.Sent) {
            this.showLoadingEndicator = true;
          }
          if (event.type === HttpEventType.Response) {
            this.showLoadingEndicator = false;
            this.openSnackBar("Add Hospital", "Success!", 2000);
            this.closeDialog();

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
