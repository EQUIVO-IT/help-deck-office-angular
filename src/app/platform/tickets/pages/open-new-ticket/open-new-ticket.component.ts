import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';

@Component({
  selector: 'app-open-new-ticket',
  templateUrl: './open-new-ticket.component.html',
  styleUrls: ['./open-new-ticket.component.scss']
})
export class OpenNewTicketComponent implements OnInit {
  errorMessage = "";
  showLoadingEndicator = false;

  // roles: GenericNameAndId[];

  ticketSenderForm: FormGroup;
  ticketDetailsForm: FormGroup;

  constructor(
    _formBuilder: FormBuilder,
    // private _ownerService: OwnerService,
    private _snackBar: MatSnackBar,
    private _authService:AuthService,
    public dialogRef: MatDialogRef<OpenNewTicketComponent>
  ) {

    this.ticketSenderForm = _formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      JobTitle: ["", Validators.required],
      HospitalName: ["", Validators.required],
      WorkTelephoneNumber: ["", Validators.required],
      EmailAddress: ["", [Validators.required, Validators.email]],
      // RoleId: ["", Validators.required],
    });

    this.ticketDetailsForm = _formBuilder.group({
      EmailSubjectLine: ["", Validators.required],
      EmailBody: ["", Validators.required],
    });

  }

  get FirstName() {
    return this.ticketSenderForm.get('FirstName');
  }

  get LastName() {
    return this.ticketSenderForm.get('LastName');
  }

  get JobTitle() {
    return this.ticketSenderForm.get('JobTitle');
  }

  get HospitalName() {
    return this.ticketSenderForm.get('HospitalName');
  }

  get WorkTelephoneNumber() {
    return this.ticketSenderForm.get('WorkTelephoneNumber');
  }

  get EmailAddress() {
    return this.ticketSenderForm.get('EmailAddress');
  }

  // get RoleId() {
  //   return this.ticketForm.get('RoleId');
  // }


  get EmailSubjectLine() {
    return this.ticketDetailsForm.get('EmailSubjectLine');
  }

  get EmailBody() {
    return this.ticketDetailsForm.get('EmailBody');
  }



  ngOnInit(): void {
    this.getHospitalsFromServer();
  }

  onSubmit() {

    // this.ticketForm.controls.Requester.setValue(this._authService.currentUser.UserName);
    // this.errorMessage = "";
    // if (this.ticketForm.valid) {

    //   this._ownerService.addEmployee(this.ticketForm.value)
    //     .subscribe(event => {
    //       if (event.type === HttpEventType.Sent) {
    //         this.showLoadingEndicator = true;
    //       }
    //       if (event.type === HttpEventType.Response) {
    //         this.showLoadingEndicator = false;
    //         this.openSnackBar("Create Employee", "Success!", 2000);
    //         this.closeDialog();
    //       }
    //     },
    //       error => {
    //         this.showLoadingEndicator = false;
    //         this.errorMessage = error.error.message;
    //       })
    // }
  }

  private closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  private getHospitalsFromServer() {
    // this._ownerService.getAllRoles(this._authService.currentUser.UserName).subscribe(event => {
    //   if (event.type === HttpEventType.Response) {
    //     this.roles = event.body as GenericNameAndId[];
    //   }
    // });
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }
}
