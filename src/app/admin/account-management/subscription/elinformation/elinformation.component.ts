import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../../shared/storage/storage.service';
import { SubscriptionEventEmiter } from '../subscription.events';

@Component({
  selector: 'app-elinformation',
  templateUrl: './elinformation.component.html',
  styleUrls: ['./elinformation.component.css']
})
export class ElinformationComponent implements OnInit {
  isSearchEditEnabled: boolean;
  isAddEditEnabled: boolean;
  isAddEditSaved: boolean;
  isAddViewOn: boolean;
  isClientActiveOnAdd: boolean;
  isClientActive: boolean;
  supressSubscriptionNotificationOnAdd: boolean;
  supressSubscriptionNotification: boolean;
  showCancel :boolean;
  // @Output() notifySubscription: EventEmitter<any> = new EventEmitter();
  constructor(private _router:Router,private _subscriptionEventEmiter:SubscriptionEventEmiter,private _storageService:StorageService) { }
  ngOnInit() {
    this.isSearchEditEnabled = false;
    this.showCancel = false;
    this.checkAddView();
  }
  edit() {
    this.isSearchEditEnabled = true;
    this.showCancel = true;
  }
  save(){
    this.isSearchEditEnabled = false;
    this.showCancel = false;
  }
  cancel(){
    this.isSearchEditEnabled = false;
    this.showCancel = false;
  }

  addEdit() {
    this.isAddEditEnabled = false;
    this.showCancel = false;
  }

  addSave(){
    this.callSubscription();
    this.isAddEditSaved=true;
    this.isAddEditEnabled = true;
    this.showCancel = false;
  }

  addCancel(){
    this.isAddEditEnabled = false;
    this.isSearchEditEnabled = false;
    this.showCancel = false;
  }

  navigateToClientInfo() {
    this._router.navigateByUrl('/subscription/clientInfo');
  }

  navigateToUserManagement() {
    this._router.navigateByUrl('/subscription/userMaintenance');
    this.callSubscription();
    this.isAddEditSaved=true;
    this.isAddEditEnabled = true;
  }

  checkAddView() {
    let value=this._storageService.getItem('addView');
    if(value=='true'){
      this.isAddViewOn=true;
    }else{
      this.isAddViewOn=false;
    }
  }

  callSubscription() {
    this._subscriptionEventEmiter.EnergyLossesEvent.emit(false);
  }

}
