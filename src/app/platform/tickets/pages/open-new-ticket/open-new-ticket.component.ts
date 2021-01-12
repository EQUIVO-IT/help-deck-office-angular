import { AdminService } from './../../../admin/styles/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Hospital } from 'src/app/platform/admin/data-types/admin-data-types';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { HttpEventType } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-open-new-ticket',
  templateUrl: './open-new-ticket.component.html',
  styleUrls: ['./open-new-ticket.component.scss']
})
export class OpenNewTicketComponent implements OnInit {
  errorMessage = "";
  showLoadingEndicator = false;

  displayedColumns: string [] = ['name', 'actions'];
  dataSource: any;
  hospitals: Hospital[] = [];
  hospital: Hospital;
  displayProgressSpinner = false;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ticketSenderForm: FormGroup;
  ticketDetailsForm: FormGroup;
  SelectHospitalForm: FormGroup;

  constructor(
    _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _authService:AuthService,
    public dialogRef: MatDialogRef<OpenNewTicketComponent>,
    private _adminService: AdminService
  ) 
  
  {

    this.ticketSenderForm = _formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      JobTitle: ["", Validators.required],
      WorkTelephoneNumber: ["", Validators.required],
      EmailAddress: ["", [Validators.required, Validators.email]],
      
    });

    this.ticketDetailsForm = _formBuilder.group({
      EmailSubjectLine: ["", Validators.required],
      EmailBody: ["", Validators.required],
    });

    this.SelectHospitalForm = _formBuilder.group({
       HospitalName: [""] }
    )};

  get FirstName() {
    return this.ticketSenderForm.get('FirstName');
  }

  get LastName() {
    return this.ticketSenderForm.get('LastName');
  }

  get JobTitle() {
    return this.ticketSenderForm.get('JobTitle');
  }

  get WorkTelephoneNumber() {
    return this.ticketSenderForm.get('WorkTelephoneNumber');
  }

  get EmailAddress() {
    return this.ticketSenderForm.get('EmailAddress');
  }

  get EmailSubjectLine() {
    return this.ticketDetailsForm.get('EmailSubjectLine');
  }

  get EmailBody() {
    return this.ticketDetailsForm.get('EmailBody');
  }

  get HospitalName() {
    return this.SelectHospitalForm.get('HospitalName');
  }



  ngOnInit(): void {
    this.getHospitalsFromServer();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
    this._adminService.getAllHospitals().subscribe(event => {
      if (event.type === HttpEventType.Sent) {
        this.displayProgressSpinner = true;
      }
      if (event.type === HttpEventType.Response) {
        this.displayProgressSpinner = false;
        this.hospitals = event.body as Hospital[];

        this.dataSource = new MatTableDataSource<Hospital>(this.hospitals);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }
}
