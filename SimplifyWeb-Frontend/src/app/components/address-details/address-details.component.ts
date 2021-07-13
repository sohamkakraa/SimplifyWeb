import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  @Input() next: string = "assign-role";
  @Input() previous: string = "personal-details";
  
  country?: string = 'Select';
  countryList: string[] = ['India', 'United Arab Emirates', ];

  state?: string = 'Select';
  stateList: string[] = ['Telangana', 'Rajasthan', ];

  city?: string = 'Select';
  cityList: string[] = ['Hyderabad', 'Vishakapatnam', ];

  constructor() { }

  ngOnInit(): void {
  }

}