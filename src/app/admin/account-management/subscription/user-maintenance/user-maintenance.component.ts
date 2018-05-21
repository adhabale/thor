import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionEventEmiter } from '../subscription.events';
import { StorageService } from '../../../../shared/storage/storage.service';
declare var $:any;

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.css']
})
export class UserMaintenanceComponent implements OnInit,OnDestroy {

  activateBtn:any;
  subAdd:any;
  isAddViewOn:boolean;
  userAdded:boolean;
  showAddClientSubBtn:boolean;
  subscriptionName:string='';

  constructor(private _router:Router, private _subscriptionEventEmiter:SubscriptionEventEmiter,private _storageService:StorageService) { }

  ngOnInit() {
    this.activateBtn = this._subscriptionEventEmiter.ActiveSubscription.subscribe((msg)=>{
      this.showAddClientSubBtn=msg;
    });
    this.subAdd = this._subscriptionEventEmiter.UserMaintenanceEventFromAdd.subscribe((msg)=>{
      this.userAdded=msg;
    })

    this.checkAddView();
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.activateBtn.unsubscribe();
    this.subAdd.unsubscribe();
  }

  navigateToEnergyLossesInfo() {
    this._router.navigateByUrl('/subscription/energyLossesInfo');
  }

  checkAddView() {
    let value=this._storageService.getItem('addView');
    if(value=='true'){
      this.isAddViewOn=true;
      this.subscriptionName=this._storageService.getItem('SubscriptionName');
      this._router.navigateByUrl('/subscription/userMaintenance/addNewUsers');
    }else{
      this.isAddViewOn=false;
      this._router.navigateByUrl('/subscription/userMaintenance/existingUsers');
    }
  }

  onActivationClick() {
  }

  navigateToHomePage(){
    this._router.navigateByUrl('/home');
  }

}
