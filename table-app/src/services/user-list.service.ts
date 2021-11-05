import { Injectable } from "@angular/core";
import { Users } from '../model/users';
import users from '../model/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  public users: Users[] = users;

  constructor() {
  }

  selectSort(event: any): void{
    let i = event.target.value;
    if(i == 1) {
      this.users = this.users?.sort((a: Users, b: Users) => {
        return a.id - b.id
      });
    }
    if(i == 2) {
      this.users = this.users?.sort((a: Users, b: Users) => {
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;
      });
    }
    if(i == 3) {
      this.users = this.users?.sort((a: Users, b: Users) => {
        if(a.lastName < b.lastName) { return -1; }
        if(a.lastName > b.lastName) { return 1; }
        return 0;
      });
    }
    if(i == 4) {
      this.users = this.users?.sort((a: Users, b: Users) => {
        if(a.email < b.email) { return -1; }
        if(a.email > b.email) { return 1; }
        return 0;
      });
    }
    if(i == 5) {
      this.users = this.users?.sort((a: Users, b: Users) => {
        if(new Date(a.birthday).getTime() < new Date(b.birthday).getTime()) { return -1; }
        if(new Date(a.birthday).getTime() > new Date(b.birthday).getTime()) { return 1; }
        return 0;
      });
    }
    if(i == 6) {
      this.users = this.users?.sort((a: Users, b: Users) => {
        if(a.salary < b.salary) { return -1; }
        if(a.salary > b.salary) { return 1; }
        return 0;
      });
    }
    // if(i == 5) {
    //   this.users = this.users?.sort((a: Users, b: Users) => {
    //     return new Date(b.birthday).getTime() - new Date(a.birthday).getTime();
    //   })
    // }
    // if(i == 6) {
    //   this.users = this.users?.sort((a: Users, b: Users) => {
    //     return a.salary - b.salary
    //   });
    // }
  }
}
