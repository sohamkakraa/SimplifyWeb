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

  public show:boolean = false;
  @Input() bodyRight?: string;

  remarks() {
    this.show = !this.show;
  }

  closeSideMenu(){
    if(this.show){
      return  this.bodyRight = '25%';
    }else{
      return  this.bodyRight = '0%'
    }
  }

}
