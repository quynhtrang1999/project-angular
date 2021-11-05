import { Component, Input, OnInit } from '@angular/core';
import { UserListService } from 'src/services/user-list.service';
import { Users } from '../../../model/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [
    UserListService
  ]
})
export class UserListComponent implements OnInit {

  @Input() users: Users[] | undefined;

  constructor(public tableSort: UserListService) {}

  ngOnInit(): void {
    this.users?.forEach(user => {
      user.phone = "(+84)" + user.phone?.split('-').join("");
    });
  }

}
