import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-sd',
  templateUrl: './review-sd.component.html',
  styleUrls: ['./review-sd.component.css']
})
export class ReviewSdComponent implements OnInit {

  @Input() next: string = "submitted";
  @Input() previous: string = "review-ac";

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
