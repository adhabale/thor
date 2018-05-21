import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'total-claim-calculator',
  templateUrl: './total-claim-calculator.component.html',
  styleUrls: ['./total-claim-calculator.component.css']
})
export class TotalClaimCalculatorComponent implements OnInit {
  pd: number = 0;
  oee: number = 0;
  bi: number = 0;
  total: number = 0;
  constructor() {
  }
  ConvertToInt(val) {
    return parseInt(val);
  }

  ngOnInit() {
  }
  onChange() {
   
  this.total = this.ConvertToInt(this.pd) + this.ConvertToInt(this.bi) + this.ConvertToInt(this.oee);
      // this.total = this.pd + this.bi + this.oee;
  }

  formatInput(input) {
    if (input && input.length > 0) {
      input = input.replace(/^0+/, '');
      if (input.length == 0) {
        return input = '0';
      } else {
        return input;
      }
    } else return input;

  }

}
