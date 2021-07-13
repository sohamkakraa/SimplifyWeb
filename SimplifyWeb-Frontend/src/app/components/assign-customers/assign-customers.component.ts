import { Component, OnInit, Input } from '@angular/core';
import { CUSTOMERS } from 'src/app/mock-customers';
import { Customer } from 'src/app/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-customers',
  templateUrl: './assign-customers.component.html',
  styleUrls: ['./assign-customers.component.css']
})
export class AssignCustomersComponent implements OnInit {
  customers: Customer[] = CUSTOMERS;
  

  @Input() next: string = "supporting-documents";
  @Input() previous: string = "assign-role";

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }
}
