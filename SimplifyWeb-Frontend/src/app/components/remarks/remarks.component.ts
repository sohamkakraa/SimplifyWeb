import { Component, OnInit } from '@angular/core';
import { Remark } from '../../Remark';
import { REMARKS } from '../../mock-remarks';
import { Change } from '../../Change';
import { CHANGES } from '../../mock-changes';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {

  remarksArray: Remark[] = REMARKS;
  changesArray: Change[] = CHANGES;
  index?: number = 0;

  show:boolean = false;
  showAlert:boolean = false;
  typing:boolean = false;
  showRemarks:boolean = true;
  showChanges:boolean = false;
  color1:string = '#154454';
  color2:string = '#666666';
  weight1:string = '600';
  weight2:string = 'normal';
  tableEmpty:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  remarks() {
    this.show = !this.show;
  }

  typed() {
    this.typing = true;
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

  showAlertF(){
    this.showAlert = true;
  }

  showAlertT(){
    this.showAlert = false;
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
