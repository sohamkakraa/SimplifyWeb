import { Component, OnInit, ViewChild } from '@angular/core';
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

  statusManager(str: string){
    if(str === "Active")
      return "green";
    else if(str === "Draft")
      return "yellow";
    else if(str === "Pending Approval")
      return "orange";
    else if(str === "Inactive")
      return "grey";
    else
      return "red";
  }

  ngOnInit(): void {
  }
}
