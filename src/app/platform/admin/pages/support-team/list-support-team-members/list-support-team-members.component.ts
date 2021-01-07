import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/platform/tickets/data-types/tickets-data-types';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { SuppertTeamMember } from '../../../data-types/admin-data-types';

@Component({
  selector: 'app-list-support-team-members',
  templateUrl: './list-support-team-members.component.html',
  styleUrls: ['./list-support-team-members.component.scss']
})
export class ListSupportTeamMembersComponent implements OnInit {
  displayedColumns: string[] = ['firstName','lastName', 'emaailAddress', 'actions'];
  dataSource: any;
  tickets: SuppertTeamMember[] = [];
  ticket: SuppertTeamMember;
  displayProgressSpinner = false;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private _router: Router,
    // private _ownerService: OwnerService,
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    // this.getSupportMembersFromServer();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onResendAccountCreatedEmail(employee) {
    // this._ownerService.resendEmployeeAccountCreatedEmail(this._authService.currentUser.UserName, employee.employeeId)
    //   .subscribe(event => {
    //     if (event.type === HttpEventType.Sent) {
    //       this.displayProgressSpinner = true;
    //     }
    //     if (event.type === HttpEventType.Response) {
    //       this.displayProgressSpinner = false;
    //       this.openSnackBar("Email Resent", "Success!", 2000);
    //     }
    //   },
    //     error => {
    //       this.displayProgressSpinner = false;
    //     });
  }

  onAddNewSupportMember() {
    // let dialogRef = this._dialog.open(AddEmployeeComponent, {
    //   width: "900px",
    //   height: "auto"
    // });

    // dialogRef.afterClosed().subscribe(res => {
    //   this.getEmployeesFromServer();
    // })
  }

  onUpdateSupportMember(value) {
    // let typed = value as Employee;
    // let dialogRef = this._dialog.open(UpdateDatabaseComponent, {
    //   width: "900px",
    //   height: "auto",
    //   data: {
    //     updateId: typed.employeeId
    //   }
    // });

    // dialogRef.afterClosed().subscribe(res => {
    //   this.getEmployeesFromServer();
    // })
  }


  onDeleteValue(value) {
    // let typed = value as Employee;
    // this._ownerService.deleteDelete(typed.employeeId).subscribe(event => {
    //   if (event.type === HttpEventType.Sent) {
    //     this.displayProgressSpinner = true;
    //   }
    //   if (event.type === HttpEventType.Response) {
    //     this.getEmployeesFromServer();
    //     this.openSnackBar("Delete Employee", "Success", 2000);
    //   }
    // })
  }

  private getSupportMembersFromServer() {
    // this._ownerService.getAllEmployees(this._authService.currentUser.UserName).subscribe(event => {
    //   if (event.type === HttpEventType.Sent) {
    //     this.displayProgressSpinner = true;
    //   }
    //   if (event.type === HttpEventType.Response) {
    //     this.displayProgressSpinner = false;
    //     this.employees = event.body as Employee[];
    //     this.dataSource = new MatTableDataSource<Employee>(this.employees);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //   }
    // });
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }
}

