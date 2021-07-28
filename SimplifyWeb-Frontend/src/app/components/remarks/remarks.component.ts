import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {

  showRemarks:boolean = true;
  showChanges:boolean = false;
  color1:string = '#154454';
  color2:string = '#666666';
  weight1:string = '600';
  weight2:string = 'normal';
  tableEmpty:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  Switch1() {
    this.showRemarks = true;
    this.showChanges = false;
    this.chosen()
  }
  Switch2() {
    this.showRemarks = false;
    this.showChanges = true;
    this.chosen()
  }

  chosen(){
    if(this.showRemarks){
      this.color1 = '#154454';
      this.color2 = '#666666';
      this.weight1 = '600';
      this.weight2 = 'normal';
    }else if (this.showChanges) {
      this.color2 = '#154454';
      this.color1 = '#666666';
      this.weight2 = '600';
      this.weight1 = 'normal';
    }
  }
}
