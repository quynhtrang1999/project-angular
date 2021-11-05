import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/services/user-list.service';
import { Users } from '../model/users';
import users from '../model/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'table-app';

  users: Users[] = users;
  constructor(public tableSort: UserListService) {}

  ngOnInit(): void {
  }

}
