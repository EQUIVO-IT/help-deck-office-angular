import { AddSupportTeamMemberComponent } from './../add-support-team-member/add-support-team-member.component';
import { AdminService } from '../../../services/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';
import { SuppertMember } from '../../../data-types/admin-data-types';
import { HttpEventType } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { AssignedPasswordDialogComponent } from '../assigned-password-dialog/assigned-password-dialog.component';

@Component({
  selector: 'app-list-support-team-members',
  templateUrl: './list-support-team-members.component.html',
  styleUrls: ['./list-support-team-members.component.scss']
})
export class ListSupportTeamMembersComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'workEmailAddress', 'actions'];
  dataSource: any;
  supportMembers: SuppertMember[] = [];
  supportMember: SuppertMember;
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
    this.getSupportMembersFromServer();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onAddNewSupportMember() {
    let dialogRef = this._dialog.open(AddSupportTeamMemberComponent, {
      width: "900px",
      height: "auto"
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getSupportMembersFromServer();
    })
  }

  onViewSignInDetails(value:SuppertMember) {
    let passwordDialofRef = this._dialog.open(AssignedPasswordDialogComponent, {
      width: "650px",
      height: "auto",
      data: {
        assignedPassword: value.generatedPassword,
        emailAddress: value.workEmailAddress
      }
    });
    // passwordDialofRef.afterClosed().subscribe(res => {
    //   this.closeDialog();
    // });

  }



  private getSupportMembersFromServer() {
    this._adminService.getAllSupportMembers().subscribe(event => {
      if (event.type === HttpEventType.Sent) {
        this.displayProgressSpinner = true;
      }
      if (event.type === HttpEventType.Response) {
        this.displayProgressSpinner = false;
        this.supportMembers = event.body as SuppertMember[];

        this.dataSource = new MatTableDataSource<SuppertMember>(this.supportMembers);
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

