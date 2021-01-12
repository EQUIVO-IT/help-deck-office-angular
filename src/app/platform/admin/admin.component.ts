import { AuthService } from './../../shared/services/equivo-api/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  username = "";
  constructor(private _router: Router, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.username = this._authService.currentUser.UserName;
  }

  onSignOut() {
    this._router.navigate(['/signin']);
    this._authService.signOut();
  }

  onGoToAdminDashboard() {
    this._router.navigate(['/admin/dashboard']);
  }

  onGoToTickets() {
    this._router.navigate(['/tickets/open']);
  }

  onGoToSupportMembers() {
    this._router.navigate(['/admin/support-members']);
  }

  onGoToHospitals() {
    this._router.navigate(['/admin/hospitals']);
  }
}
