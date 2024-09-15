import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  user: User;
  constructor(private authServise: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
  }
  onLogout() {
    this.authServise.logout();
    this.router.navigate(['/login']);
  }
  editProfile() {
    this.router.navigate(['system', 'edit']);
  }
}
