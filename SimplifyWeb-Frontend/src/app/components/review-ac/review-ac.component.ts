import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Customer';
import { CUSTOMERS } from 'src/app/mock-customers';

@Component({
  selector: 'app-review-ac',
  templateUrl: './review-ac.component.html',
  styleUrls: ['./review-ac.component.css']
})
export class ReviewAcComponent implements OnInit {

  customers: Customer[] = CUSTOMERS;
  

  @Input() next: string = "review-sd";
  @Input() previous: string = "review-ar";

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }

}
