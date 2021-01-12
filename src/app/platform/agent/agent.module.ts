import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentDashboardComponent } from './pages/agent-dashboard/agent-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListClosedTicketsComponent } from './pages/tickets/list-closed-tickets/list-closed-tickets.component';
import { ListOpenTicketsComponent } from './pages/tickets/list-open-tickets/list-open-tickets.component';
import { OpenNewTicketComponent } from './pages/tickets/open-new-ticket/open-new-ticket.component';


@NgModule({
  declarations: [
    AgentComponent,
    AgentDashboardComponent,
    ListOpenTicketsComponent,
    ListClosedTicketsComponent,
    OpenNewTicketComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule
  ]
})
export class AgentModule { }
