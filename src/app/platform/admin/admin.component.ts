import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';

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

}
