import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assign-customers',
  templateUrl: './assign-customers.component.html',
  styleUrls: ['./assign-customers.component.css']
})
export class AssignCustomersComponent implements OnInit {

  constructor() { }

  @Input() next: string = "supporting-documents";
  @Input() previous: string = "assign-role";

  ngOnInit(): void {
  }

}
