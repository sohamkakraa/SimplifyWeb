import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-review-pd',
  templateUrl: './review-pd.component.html',
  styleUrls: ['./review-pd.component.css']
})
export class ReviewPdComponent implements OnInit {
  @Input() user?: User;
  @Input() bodyRight?: string;

  public show:boolean = false;

  title: string = 'Mr.';
  titleList: string[] = ['Mr.', 'Miss.'];

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
    console.log(this.user);
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

  remarks() {
    this.show = !this.show;
  }
  
  @Input() next: string = "review-ad";
  @Input() previous: string = "users";

  closeSideMenu(){
    if(this.show){
      return  this.bodyRight = '25%';
    }else{
      return  this.bodyRight = '0%'
    }
  }
}
