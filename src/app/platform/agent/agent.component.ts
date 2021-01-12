import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
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
