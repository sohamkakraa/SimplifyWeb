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


}
