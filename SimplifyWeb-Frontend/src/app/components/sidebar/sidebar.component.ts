import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor() {  }

  @Input() pageForward?: string;
  @Input() pageBackward?: string;
  @Input() href?: string;

  ngOnInit(): void {
  }

}
