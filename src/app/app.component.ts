import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = [];
  admins = [];
  tUser: number = 0;
  tAdmin: number = 0;

  getUser(user) {
    this.users.push(user);
  }

  getAdmin(admin) {
    this.admins.push(admin);
  }

  onRemoveUser(index) {
    this.users.splice(index, 1);
    this.tUser += 1;
  }

  onRemoveAdmin(index) {
    this.admins.splice(index, 1);
    this.tAdmin += 1;
  }
  // name = 'Angular ' + VERSION.major;
}
