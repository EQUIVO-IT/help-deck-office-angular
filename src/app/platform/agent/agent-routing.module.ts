import { AgentDashboardComponent } from './pages/agent-dashboard/agent-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';
import { ListClosedTicketsComponent } from './pages/tickets/list-closed-tickets/list-closed-tickets.component';
import { ListOpenTicketsComponent } from './pages/tickets/list-open-tickets/list-open-tickets.component';

const routes: Routes = [{
  path: '',
  component: AgentComponent,
  children: [
    { path: 'dashboard', component: AgentDashboardComponent },
    { path: "open", component: ListOpenTicketsComponent },
    { path: "closed", component: ListClosedTicketsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
