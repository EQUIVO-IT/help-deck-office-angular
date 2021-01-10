import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
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
