import { AdminService } from './../../../styles/admin.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NumberKeyValue } from 'src/app/shared/data-types/shared-data-types';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.scss']
})
export class UpdateHospitalComponent implements OnInit {
  errorMessage = "";
  showLoadingEndicator = false;

  updateForm: FormGroup;
  update: NumberKeyValue;
  updateName;
  updateId;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _adminService:AdminService,
    private _authService: AuthService,
    // public dialogRef: MatDialogRef<UpdateHospitalComponent>,
    @Inject(MAT_DIALOG_DATA) dataFromParent: any,

  ) {
    this.updateId = dataFromParent.updateId;
    this.updateName = dataFromParent.updateName;
    this.getDataToUpdateFromServer();
   }

   get Name() {
    return this.updateForm.get('Name');
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMessage = "";
    if (this.updateForm.valid) {
      this._adminService.updateHospitals(this.updateForm.value,  this.updateId)
        .subscribe(event => {
          if (event.type === HttpEventType.Sent) {
            this.showLoadingEndicator = true;
          }
          if (event.type === HttpEventType.Response) {
            this.showLoadingEndicator = false;
            this.openSnackBar("Update Hospital", "Success!", 2000);
            this.closeDialog();
          }
        },
          error => {
            this.showLoadingEndicator = false;
            this.errorMessage = error.error.message;
          })
    }
  }

  private getDataToUpdateFromServer() {
    this._adminService.getAllHospitals().subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this.update = event.body as NumberKeyValue;
        this.buildForm(this._formBuilder)
      }
    });
  }

  private buildForm(_formBuilder: FormBuilder) {
    this.updateForm = _formBuilder.group({
      Name: [this.update.value, Validators.required],
    });
  }

  private closeDialog() {
    // this.dialogRef.close({ event: 'Cancel' });
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }
}
