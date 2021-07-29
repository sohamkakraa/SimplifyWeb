import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  gotoCreateUser() {
    this.router.navigate(['/create-user']);
  }
  ngOnInit(): void {
  }

  showAll:boolean = true;
  showDrafts:boolean = false;
  showPA:boolean = false;
  showSub:boolean = false;
  showActive:boolean = false;
  showInactive:boolean = false;
  showRejected:boolean = false;

  color1:string = '#154454';
  color2:string = '#666666';
  color3:string = '#666666';
  color4:string = '#666666';
  color5:string = '#666666';
  color6:string = '#666666';
  color7:string = '#666666';

  weight1:string = '600';
  weight2:string = 'normal';
  weight3:string = 'normal';
  weight4:string = 'normal';
  weight5:string = 'normal';
  weight6:string = 'normal';
  weight7:string = 'normal';

  Switch1() {
    this.showAll = true;
    this.showDrafts = false;
    this.showPA = false;
    this.showActive = false;
    this.showSub = false;
    this.showInactive = false;
    this.showRejected = false;
    this.chosen()
  }
  Switch2() {
    this.showDrafts = true;
    this.showAll = false;
    this.showPA = false;
    this.showActive = false;
    this.showSub = false;
    this.showInactive = false;
    this.showRejected = false;
    this.chosen()
  }
  Switch3() {
    this.showDrafts = false;
    this.showAll = false;
    this.showPA = true;
    this.showActive = false;
    this.showSub = false;
    this.showInactive = false;
    this.showRejected = false;
    this.chosen()
  }
  Switch4() {
    this.showDrafts = false;
    this.showAll = false;
    this.showPA = false;
    this.showActive = false;
    this.showSub = true;
    this.showInactive = false;
    this.showRejected = false;
    this.chosen()
  }
  Switch5() {
    this.showDrafts = false;
    this.showAll = false;
    this.showPA = false;
    this.showActive = true;
    this.showSub = false;
    this.showInactive = false;
    this.showRejected = false;
    this.chosen()
  }
  Switch6() {
    this.showDrafts = false;
    this.showAll = false;
    this.showPA = false;
    this.showActive = false;
    this.showSub = false;
    this.showInactive = true;
    this.showRejected = false;
    this.chosen()
  }
  Switch7() {
    this.showDrafts = false;
    this.showAll = false;
    this.showPA = false;
    this.showActive = false;
    this.showSub = false;
    this.showInactive = false;
    this.showRejected = true;
    this.chosen()
  }

  chosen(){
    if(this.showAll){
      this.color1 = '#154454';
      this.color2 = '#666666';
      this.color3 = '#666666';
      this.color4 = '#666666';
      this.color5 = '#666666';
      this.color6 = '#666666';
      this.color7 = '#666666';

      this.weight1 = '600';
      this.weight2 = 'normal';
      this.weight3 = 'normal';
      this.weight4 = 'normal';
      this.weight5 = 'normal';
      this.weight6 = 'normal';
      this.weight7 = 'normal';
    }else if (this.showDrafts) {
      this.color2 = '#154454';
      this.color1 = '#666666';
      this.color3 = '#666666';
      this.color4 = '#666666';
      this.color5 = '#666666';
      this.color6 = '#666666';
      this.color7 = '#666666';

      this.weight2 = '600';
      this.weight1 = 'normal';
      this.weight3 = 'normal';
      this.weight4 = 'normal';
      this.weight5 = 'normal';
      this.weight6 = 'normal';
      this.weight7 = 'normal';
    }
    else if (this.showPA) {
      this.color3 = '#154454';
      this.color2 = '#666666';
      this.color1 = '#666666';
      this.color4 = '#666666';
      this.color5 = '#666666';
      this.color6 = '#666666';
      this.color7 = '#666666';

      this.weight3 = '600';
      this.weight2 = 'normal';
      this.weight1 = 'normal';
      this.weight4 = 'normal';
      this.weight5 = 'normal';
      this.weight6 = 'normal';
      this.weight7 = 'normal';
    }
    else if (this.showSub) {
      this.color4 = '#154454';
      this.color2 = '#666666';
      this.color3 = '#666666';
      this.color1 = '#666666';
      this.color5 = '#666666';
      this.color6 = '#666666';
      this.color7 = '#666666';

      this.weight4 = '600';
      this.weight2 = 'normal';
      this.weight3 = 'normal';
      this.weight1 = 'normal';
      this.weight5 = 'normal';
      this.weight6 = 'normal';
      this.weight7 = 'normal';
    }
    else if (this.showActive) {
      this.color5 = '#154454';
      this.color2 = '#666666';
      this.color3 = '#666666';
      this.color4 = '#666666';
      this.color1 = '#666666';
      this.color6 = '#666666';
      this.color7 = '#666666';

      this.weight5 = '600';
      this.weight2 = 'normal';
      this.weight3 = 'normal';
      this.weight4 = 'normal';
      this.weight1 = 'normal';
      this.weight6 = 'normal';
      this.weight7 = 'normal';
    }
    else if (this.showInactive) {
      this.color6 = '#154454';
      this.color2 = '#666666';
      this.color3 = '#666666';
      this.color4 = '#666666';
      this.color5 = '#666666';
      this.color1 = '#666666';
      this.color7 = '#666666';

      this.weight6 = '600';
      this.weight2 = 'normal';
      this.weight3 = 'normal';
      this.weight4 = 'normal';
      this.weight5 = 'normal';
      this.weight1 = 'normal';
      this.weight7 = 'normal';
    }
    else if (this.showRejected) {
      this.color7 = '#154454';
      this.color2 = '#666666';
      this.color3 = '#666666';
      this.color4 = '#666666';
      this.color5 = '#666666';
      this.color6 = '#666666';
      this.color1 = '#666666';

      this.weight7 = '600';
      this.weight2 = 'normal';
      this.weight3 = 'normal';
      this.weight4 = 'normal';
      this.weight5 = 'normal';
      this.weight6 = 'normal';
      this.weight1 = 'normal';
    }
  }
}
