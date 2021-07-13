import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  title: string = 'Mr.';
  titleList: string[] = ['Mr.', 'Miss.'];

  country?: string = 'IND';
  countryList: string[] = ['IND', 'UAE', ];

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }

  @Input() next: string = "address-details";
  @Input() previous: string = "create-user";
}
