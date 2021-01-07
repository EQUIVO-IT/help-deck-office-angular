import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { ListOpenTicketsComponent } from './pages/list-open-tickets/list-open-tickets.component';
import { ListClosedTicketsComponent } from './pages/list-closed-tickets/list-closed-tickets.component';
import { TicketsDashboardComponent } from './pages/tickets-dashboard/tickets-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OpenNewTicketComponent } from './pages/open-new-ticket/open-new-ticket.component';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketsDashboardComponent,
    ListOpenTicketsComponent,
    ListClosedTicketsComponent,
    OpenNewTicketComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule
  ]
})
export class TicketsModule { }
