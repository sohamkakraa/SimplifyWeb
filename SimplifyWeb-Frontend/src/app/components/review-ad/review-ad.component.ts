import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, Country, State } from 'country-state-city';
import { ICity, ICountry, IState } from 'country-state-city/dist/lib/interface';

@Component({
  selector: 'app-review-ad',
  templateUrl: './review-ad.component.html',
  styleUrls: ['./review-ad.component.css']
})
export class ReviewAdComponent implements OnInit {

  @Input() next: string = "assign-role";
  @Input() previous: string = "personal-details";
  
  country: ICountry = {  "isoCode": "IN",  "name": "India",  "phonecode": "91",  "flag": "🇮🇳",  "currency": "INR",  "latitude": "20.00000000",  "longitude": "77.00000000",   "timezones": [{  "zoneName": "Asia\/Kolkata",  "gmtOffset": 19800,  "gmtOffsetName": "UTC+05:30",  "abbreviation": "IST",  "tzName": "Indian Standard Time"  }]  };
  countryList: ICountry[] = Country.getAllCountries();

  state: IState = { "name": "Telangana", "isoCode": "TG",  "countryCode": "IN",  "latitude": "18.11243720",  "longitude": "79.01929970" };
  stateList: IState[] = State.getStatesOfCountry(this.country?.isoCode);

  city: ICity = {    "name": "New Delhi",    "countryCode": "IN",    "stateCode": "DL",    "latitude": "28.63576000",    "longitude": "77.22445000"  }  ;
  cityList: ICity[] = City.getCitiesOfState(this.country.isoCode, this.state.isoCode);

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }

}
