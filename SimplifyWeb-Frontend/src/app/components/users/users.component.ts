import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { USERS } from '../../mock-users';
import { User } from '../../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[] = USERS;
  displayedColumns: string[] = ['id', 'username', 'role', 'usertype', 'customers', 'updatedOn', 'status', 'actions'];
  dataSource = this.users;
  
  constructor() { }

  roleManager(str: string) {
    if(!str.localeCompare("")){
      str = "--";
    }
    return str
}

  customerManager(num: number) {
    var ans;
    if(num < 10 && num > 0) {
      ans = "0" + num;
    } 
    else if (num === 0) {
      ans = "--";
    }
    return ans;
}
  ngOnInit(): void {
  }
}