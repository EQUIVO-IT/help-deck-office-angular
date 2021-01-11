import { AddHospitalComponent } from './../add-hospital/add-hospital.component';
import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { Hospital, SuppertMember } from '../../../data-types/admin-data-types';
import { AdminService } from '../../../styles/admin.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-hospitals',
  templateUrl: './list-hospitals.component.html',
  styleUrls: ['./list-hospitals.component.scss']
})
export class ListHospitalsComponent implements OnInit {

  displayedColumns: string[] = ['name',  'actions'];
  dataSource: any;
  hospitals: Hospital[] = [];
  hospital: Hospital;
  displayProgressSpinner = false;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private _router: Router,
    private _adminService: AdminService,
     private _authService: AuthService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getHospitalsFromServer();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onAddNew() {
    let dialogRef = this._dialog.open(AddHospitalComponent, {
      width: "900px",
      height: "auto"
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getHospitalsFromServer();
    })
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
