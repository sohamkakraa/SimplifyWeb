import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROLES } from 'src/app/mock-roles';
import { Role } from 'src/app/Role';

@Component({
  selector: 'app-review-ar',
  templateUrl: './review-ar.component.html',
  styleUrls: ['./review-ar.component.css']
})
export class ReviewArComponent implements OnInit {

  roles: Role[] = ROLES;

  @Input() next: string = "review-ac";
  @Input() previous: string = "review-ad";

  public href: string = "";

  constructor(private router: Router) {}

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
  
  ngOnInit() {
    this.href = this.router.url;
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
