import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(private authService: AuthenticationService) { }
 
  ngOnInit() {
  }
 
  logout() {
    this.authService.logout();
  }

}
