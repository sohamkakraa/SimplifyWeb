import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supporting-documents',
  templateUrl: './supporting-documents.component.html',
  styleUrls: ['./supporting-documents.component.css']
})
export class SupportingDocumentsComponent implements OnInit {

  @Input() next: string = "submitted";
  @Input() previous: string = "assign-customers";

  constructor() { }

  ngOnInit(): void {
  }

}
