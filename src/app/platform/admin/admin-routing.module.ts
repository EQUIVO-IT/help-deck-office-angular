import { AddHospitalComponent } from './pages/hospitals/add-hospital/add-hospital.component';
import { ListHospitalsComponent } from './pages/hospitals/list-hospitals/list-hospitals.component';
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
  {path:"dashboard",component:AdminDashboardComponent},
  {path:"support-members", component:ListSupportTeamMembersComponent},
  {path:"add-support-member",component:AddSupportTeamMemberComponent},
  {path:"hospitals", component:ListHospitalsComponent},
  {path:"add-hospital",component:AddHospitalComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
