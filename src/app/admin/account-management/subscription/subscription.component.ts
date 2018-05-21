import { Component, Inject, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StorageService } from '../../../shared/storage/storage.service';
import { SubscriptionEventEmiter } from './subscription.events';

declare var $: any;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit, DoCheck {
  showRouting: boolean;
  showDetails: boolean;
  currentRoute: string;
  subscriptionName: string;
  selectedSubscriptionName: string;
  searchValue: string;
  searchView: boolean;
  subSelected: boolean;
  isSearchOn: boolean;
  isAddSearchOn: boolean;
  addView: boolean;
  addSubscriptionList: any;
  searchSubscriptionList: any;
  selectedRow: number;
  sub: any;



  constructor(private _router: Router, @Inject(DOCUMENT) private document: any, private _storageService: StorageService, private _subscriptionEventEmiter: SubscriptionEventEmiter) { }

  ngOnInit() {
    this.showRouting = false;
    this.showDetails = true;
    this.subscriptionName = '';
    this.selectedSubscriptionName = '';
    this._storageService.setSubscriptionName(this.subscriptionName);
    this.searchView = true;
    this.subSelected = true;
    this.isSearchOn = false;
    this.isAddSearchOn = false;
    this.addView = false;
    this.searchValue = '';
    this.addSubscriptionList = [{ 'Name': 'British Petroleum', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] },
    { 'Name': 'British Utilities', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] },
    { 'Name': 'British Oil and Gas', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] },
    { 'Name': 'British Energy', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] }];

    this.searchSubscriptionList = [{ 'Name': 'British Petroleum', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] },
    { 'Name': 'British Utilities', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] },
    { 'Name': 'British Oil and Gas', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] },
    { 'Name': 'British Energy', 'Types': ['Associated Party 1', 'Associated Party 2', 'Associated Party 3'] }];

    this.sub = this._subscriptionEventEmiter.EnergyLossesEvent.subscribe((msg) => {
      this.setNotification(msg);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    var activeUrl = this.document.location.href.substring(this.document.location.href.lastIndexOf('/') + 1);
    if (activeUrl == 'addNewUsers' || activeUrl == 'existingUsers')
      this.currentRoute = 'userMaintenance';
    else
      this.currentRoute = activeUrl;
  }

  continueSelectedSubscription() {
    this.subscriptionName = this.selectedSubscriptionName;
    this.searchValue = this.subscriptionName;
    // this._storageService.setSubscriptionName(this.subscriptionName);
    this.showDetails = true;
    this.showRouting = true;
    this._router.navigateByUrl('/subscription/clientInfo');
    this.currentRoute = 'clientInfo';
    this.addView = false;
    this._storageService.setItem('addView', 'false');

  }

  continueSelectedAddSubscription() {
    this.subscriptionName = this.selectedSubscriptionName;
    this.searchValue = this.subscriptionName;
    // this._storageService.setSubscriptionName(this.subscriptionName);
    this.showDetails = true;
    this.showRouting = true;
    this._router.navigateByUrl('/subscription/clientInfo');
    this.currentRoute = 'clientInfo';
    this.addView = true;
    this._storageService.setItem('addView', 'true');
    this._storageService.setItem('SubscriptionName', this.subscriptionName);
  }

  navigateSubscription(route: string) {
    if (route)
      this._router.navigateByUrl('/subscription/' + route)
  }
  openTab() {
    this._router.navigateByUrl('/subscription/userMaintenance/addNewUsers');
  }
  changeHeaderToTextField() {
    this.searchView = false;
    this.searchValue = '';
  }

  changeTextToHeaderField() {
    this.searchView = true;
    // this.subscriptionName='';
  }

  onSearchChange(value) {
    if (value.length >= 1) {
      this.searchValue = value;
      this.selectedRow = null;
      this.isSearchOn = false;
      this.searchView = true;
      // this.subscriptionName='';
      this.subSelected = true;
      document.getElementById("searchSubModal").click();
    }
  }

  onAddSubscription() {
    this.selectedRow = null;
    this.isAddSearchOn = false;
    this.searchView = true;
    // this.subscriptionName='';
    this.searchValue = '';
    this.subSelected = true;
    document.getElementById("searchAddSubModal").click();
  }

  selectionDetected(value) {
    this.selectedSubscriptionName = value;
    this._storageService
    this.subSelected = false;
  }

  searchSubscriptions() {
    this.isSearchOn = true;
    document.getElementById("searchSubModal").click();
  }

  searchAddSubscriptions() {
    this.isAddSearchOn = true;
  }

  setAddSubClickedRow(index) {
    this.selectedRow = index;
    this.selectedSubscriptionName = this.addSubscriptionList[index].Name;
    this.subSelected = false;
  }
  setSearchSubClickedRow(index) {
    this.selectedRow = index;
    this.selectedSubscriptionName = this.addSubscriptionList[index].Name;
    this.subSelected = false;
  }

  reset() {
    this.searchValue = '';
    this.isSearchOn = false;
    this.isAddSearchOn = false;
    this.selectedRow = null;
    this.subSelected = true;
  }

  setNotification(msg) {
    this.addView = msg;
  }

}
