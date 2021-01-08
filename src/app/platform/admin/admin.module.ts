import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListSupportTeamMembersComponent } from './pages/support-team/list-support-team-members/list-support-team-members.component';
import { AddSupportTeamMemberComponent } from './pages/support-team/add-support-team-member/add-support-team-member.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AssignedPasswordDialogComponent } from './pages/support-team/assigned-password-dialog/assigned-password-dialog.component';


@NgModule({
  declarations: [AdminComponent, ListSupportTeamMembersComponent, AddSupportTeamMemberComponent, AdminDashboardComponent, AssignedPasswordDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
