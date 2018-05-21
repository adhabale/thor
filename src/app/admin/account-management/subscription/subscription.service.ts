import { Injectable } from '@angular/core';

@Injectable()
export class SubscriptionService {

  addView:boolean;

  constructor() { }

  getAddView(){
    return this.addView;
  }
  setAddView(addView:boolean){
    this.addView=addView;
  }

}
