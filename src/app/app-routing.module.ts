import { SigninComponent } from './shared/components/authentication/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'tickets', loadChildren: () => import('./platform/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
