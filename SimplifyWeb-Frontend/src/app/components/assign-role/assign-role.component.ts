import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/Role';
import { ROLES } from 'src/app/mock-roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {
  roles: Role[] = ROLES;

  @Input() next: string = "assign-customers";
  @Input() previous: string = "address-details";

  searchedKeyword!: string;

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }

}
