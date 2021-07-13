import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/Role';
import { ROLES } from 'src/app/mock-roles';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {
  roles: Role[] = ROLES;
  displayedColumns: string[] = ['id', 'name', 'type'];
  dataSource = this.roles;

  constructor() { }

  @Input() next: string = "assign-customers";
  @Input() previous: string = "address-details";

  ngOnInit(): void {
  }

}
