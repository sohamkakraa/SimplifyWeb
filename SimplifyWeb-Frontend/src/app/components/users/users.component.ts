import { Component, OnInit } from '@angular/core';
import { USERS } from '../../mock-users';
import { User } from '../../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = USERS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
