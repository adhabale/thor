import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../../shared/storage/storage.service';
import { SubscriptionEventEmiter } from '../../subscription.events';
declare var $: any;
@Component({
  selector: 'app-add-new-users',
  templateUrl: './add-new-users.component.html',
  styleUrls: ['./add-new-users.component.css']
})
export class AddNewUsersComponent implements OnInit {
  searchUserResult: boolean = false;
  isClientActive: boolean;
  expandLinkName1: string = 'More Details';
  expandLinkName2: string = 'More Details';
  searchUserName: string = '';
  showAddClientSubBtn: boolean;
  isShowSuccess: boolean;

  isAddViewOn: boolean;
  constructor(private _storageService: StorageService, private _subscriptionEventEmiter: SubscriptionEventEmiter) { }

  ngOnInit() {
    this.isShowSuccess = false;
    this.checkAddView();
  }

  searchUser() {
    this.searchUserResult = true;
    this.isShowSuccess = false;
  }

  saveUserDetails() {
    this.showAddClientSubBtn = true;
    this.isShowSuccess = true;
    if (this.isAddViewOn) {
      this._subscriptionEventEmiter.UserMaintenanceEventFromAdd.emit(true);
      this._subscriptionEventEmiter.ActiveSubscription.emit(true);
    }
    // $(window).scrollTop(0);
    $('html, body').animate({
      scrollTop: 0
    });
  }

  openTableAccordion1() {
    if (this.expandLinkName1 == 'More Details') {
      this.expandLinkName1 = 'Less Details';
      $('.caret').addClass('caret-inverse');
    }
    else {
      this.expandLinkName1 = 'More Details'
      $('.caret').removeClass('caret-inverse');
    }
  }

  openTableAccordion2() {
    this.isShowSuccess = false;
    if (this.expandLinkName2 == 'More Details') {
      this.expandLinkName2 = 'Less Details';
      $('.caret').addClass('caret-inverse');
    }
    else {
      this.expandLinkName2 = 'More Details'
      $('.caret').removeClass('caret-inverse');
    }
  }

  reset() {
    this.searchUserName = '';
    this.searchUserResult = false;
    this.isShowSuccess = false;
  }

  checkAddView() {
    let value = this._storageService.getItem('addView');
    if (value == 'true') {
      this.isAddViewOn = true;
    } else {
      this.isAddViewOn = false;
    }
  }

}
