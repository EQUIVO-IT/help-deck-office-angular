import { TicketsDashboardComponent } from './pages/tickets-dashboard/tickets-dashboard.component';
import { ListClosedTicketsComponent } from './pages/list-closed-tickets/list-closed-tickets.component';
import { ListOpenTicketsComponent } from './pages/list-open-tickets/list-open-tickets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsComponent } from './tickets.component';

const routes: Routes = [{
  path: '',
  component: TicketsComponent,
  children: [
    { path: "dashboard", component: TicketsDashboardComponent },
    { path: "open", component: ListOpenTicketsComponent },
    { path: "closed", component: ListClosedTicketsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
