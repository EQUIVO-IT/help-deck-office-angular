import { SigninComponent } from './shared/components/authentication/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'tickets', loadChildren: () => import('./platform/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'admin', loadChildren: () => import('./platform/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
