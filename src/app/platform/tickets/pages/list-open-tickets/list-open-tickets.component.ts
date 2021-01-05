import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { Ticket } from '../../data-types/tickets-data-types';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';

@Component({
  selector: 'app-list-open-tickets',
  templateUrl: './list-open-tickets.component.html',
  styleUrls: ['./list-open-tickets.component.scss']
})
export class ListOpenTicketsComponent implements OnInit {
  displayedColumns: string[] = ['ticketNumber','hospital', 'status', 'received','lastUpdated', 'actions'];
  dataSource: any;
  tickets: Ticket[] = [];
  ticket: Ticket;
  displayProgressSpinner = false;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    // private _employeeService: EmployeeService,

    private _router: Router,
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getOpenTicketsFromServer();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onArchiveClient(ticket:Ticket) {
    // this._employeeService
    //   .toggleClientArchiveStatus(this._authService.currentUser.UserName, ticket.id)
    //   .subscribe((event: { type: HttpEventType; }) => {
    //     if (event.type === HttpEventType.Sent) {
    //       this.displayProgressSpinner = true;
    //     }
    //     if (event.type === HttpEventType.Response) {
    //       this.getOpenTicketsFromServer();
    //       this.displayProgressSpinner = false;
    //       this.openSnackBar("Client Archived", "Success", 2000);

    //     }
    //   });
  }

  private getOpenTicketsFromServer() {
    // this._employeeService.getActiveClients(this._authService.currentUser.UserName).subscribe(event => {
    //   if (event.type === HttpEventType.Sent) {
    //     this.displayProgressSpinner = true;
    //   }
    //   if (event.type === HttpEventType.Response) {
    //     this.tickets = event.body as Ticket[];
    //     this.dataSource = new MatTableDataSource<Ticket>(this.tickets);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //     this.displayProgressSpinner = false;
    //   }
    // });
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }
}



