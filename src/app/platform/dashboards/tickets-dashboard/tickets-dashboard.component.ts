import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-dashboard',
  templateUrl: './tickets-dashboard.component.html',
  styleUrls: ['./tickets-dashboard.component.scss']
})
export class TicketsDashboardComponent implements OnInit {
  cards = [];
  constructor(
    // private _reportService: ReportService,
    private _router: Router
  ) {
    // this.cards = this._reportService.cards();
  }

  ngOnInit(): void {
  }

  onViewClientQuotationReport() {
    this._router.navigate(['/owner/report/clientquotation']);
  }

  onViewSupplierQuotationReport() {
    this._router.navigate(['/owner/report/supplierquotation']);
  }

  onViewIncomeAndExpenseReport() {
    this._router.navigate(['/owner/report/incomeandexpense']);
  }

  onViewIncomeReport() {
    this._router.navigate(['/owner/report/income']);

  }

  onViewExpenseReport() {
    this._router.navigate(['/owner/report/expense']);

  }
}

