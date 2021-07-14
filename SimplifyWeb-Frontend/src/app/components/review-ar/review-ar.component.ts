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

    ngOnInit() {
        this.href = this.router.url;
    }
}
