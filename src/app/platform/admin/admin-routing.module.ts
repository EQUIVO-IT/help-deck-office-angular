import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddSupportTeamMemberComponent } from './pages/support-team/add-support-team-member/add-support-team-member.component';
import { ListSupportTeamMembersComponent } from './pages/support-team/list-support-team-members/list-support-team-members.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
children:[
  {path:"support-members", component:ListSupportTeamMembersComponent},
  {path:"add-support-member",component:AddSupportTeamMemberComponent},
  {path:"dashboard",component:AdminDashboardComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
