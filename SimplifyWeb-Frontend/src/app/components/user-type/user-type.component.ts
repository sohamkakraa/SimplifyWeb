import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {
  
  usertype?: string;
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.usertype);
  }

}
