export class Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
  salary: number;
  phone: string;

  constructor(id: number, firstName: string, lastName: string, email: string, gender: string, birthday: string, salary: number, phone: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.birthday = birthday;
    this.salary = salary;
    this.phone = phone;
  }
}
