import { SigninComponent } from './shared/components/authentication/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./platform/admin/admin.module').then(m => m.AdminModule) },
  { path: 'agent', loadChildren: () => import('./platform/agent/agent.module').then(m => m.AgentModule) },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
