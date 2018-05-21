import { Component, OnInit } from '@angular/core';
import { ActivityLogSearch } from './activity-log-search'
import * as moment from 'moment/moment';
import * as _ from 'lodash';

import { NguiAutoCompleteDirective } from './autocomplete/auto-complete.directive';
import{AutocompleteComponent} from './auto-complete/auto-complete.component';
@Component({
  selector: 'activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})

export class ActivityLogComponent implements OnInit {

  public model1: string;

  count: number = 25;
  searchUserName: string = "";
  fromDate: string;
  toDate: string;
  isfromDateInvalid: boolean;
  istoDateInvalid: boolean;
  activityLogSearch: ActivityLogSearch;
  dateFlag: boolean;
  userNameFlag: boolean;
  actionFlag: boolean;
  detailsFlag: boolean;
  serverFlag: boolean;
  viewModuleFlag: boolean;
  scFlag: boolean;
  searchCriteria:string;
  serverIp:number;
  viewModule:string;
  action:string;

  selectedUserNames=[];
  constructor() { }

  ngOnInit() {

  }

  onExport() {

  }

  selectedUsers(list){
this.selectedUserNames=list;

  }
  onSearch(){

  }
  public callBack(newVal1) {
    this.model1 = newVal1;
  }

  setfromDate(fromDate: string) {
    this.fromDate = fromDate;
  }

  settoDate(toDate: string) {
    this.toDate = toDate;
  }
  checkfromDateFormat(value: boolean) {
    if (value)
      this.isfromDateInvalid = false;
    else
      this.isfromDateInvalid = true;
  }

  checktoDateFormat(value: boolean) {
    if (value)
      this.istoDateInvalid = false;
    else
      this.istoDateInvalid = true;
  }

  checkDateValidation() {

    if (this.fromDate && this.toDate && !this.isfromDateInvalid && !this.istoDateInvalid) {
      return !(moment(this.fromDate).isBefore(this.toDate));
    } else {
      return false;
    }
  }

  sortByDate() {
    if (this.dateFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['date'], ['asc']);
      this.dateFlag = !this.dateFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['date'], ['desc']);
      this.dateFlag = !this.dateFlag;
    }
  }

  sortByUserName() {
    if (this.userNameFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['username'], ['asc']);
      this.userNameFlag = !this.userNameFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['username'], ['desc']);
      this.userNameFlag = !this.userNameFlag;
    }
  }

  sortByAction() {
    if (this.actionFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['action'], ['asc']);
      this.actionFlag = !this.actionFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['action'], ['desc']);
      this.actionFlag = !this.actionFlag;
    }
  }

  sortByDetails() {
    if (this.detailsFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['details'], ['asc']);
      this.detailsFlag = !this.detailsFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['details'], ['desc']);
      this.detailsFlag = !this.detailsFlag;
    }
  }

  sortByServer() {
    if (this.serverFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['serverIp'], ['asc']);
      this.serverFlag = !this.serverFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['serverIp'], ['desc']);
      this.serverFlag = !this.serverFlag;
    }
  }


  sortByViewModule() {
    if (this.viewModuleFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['viewmodule'], ['asc']);
      this.viewModuleFlag = !this.viewModuleFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['viewmodule'], ['desc']);
      this.viewModuleFlag = !this.viewModuleFlag;
    }
  }

  sortBySearchCriteria() {
    if (this.scFlag) {
      this.activityLogs = _.orderBy(this.activityLogs, ['searchCriteria'], ['asc']);
      this.scFlag = !this.scFlag;
    }
    else {
      this.activityLogs = _.orderBy(this.activityLogs, ['searchCriteria'], ['desc']);
      this.scFlag = !this.scFlag;
    }
  }

  remove(){
    //this.selected.splice(this.selected.indexOf(item),1);
}

  public userNames = ['BOG,Amruta', 'CG,Abhishek', 'WTW,Hemant', 'BOG,Shweta', 'CG,Souvik'];

  public searchCriteriaList = [
    'year-1985,cause-Blowout',
    'year-1995,cause-Blowout',
    'year-1980,cause-Blowout',
    'year-1990,cause-Blowout',
    'year-2000,cause-Blowout',
    'year-1973,cause-Blowout'
  ]

  public serverIpList = [
    '10.2.402.127',
    '10.2.402.129',
    '10.2.402.126',
    '10.2.402.120',
    '10.2.402.121',
    '10.2.402.126'
  ]
  public activityLogs = [
    { date: '21-01-2010 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.132' },
    { date: '01-05-2018 10:00', username: 'BOG, Amruta, Dhabale', viewmodule: 'Terms of Use', action: 'Add', details: 'Indexfile', searchCriteria: 'Year - 1985, Cause - Collapse', serverIp: '10.2.408.135' },
    { date: '11-02-2012 10:00', username: 'BOG, Chetan, Kulkarni', viewmodule: 'Home', action: 'Search', details: 'BP Petrolium', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.422.135' },
    { date: '28-08-2012 10:00', username: 'WTW, Riya, Sen', viewmodule: 'Visual Analytics', action: 'Edit', details: 'Upstream', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.3.402.135' },
    { date: '22-11-2018 10:00', username: 'CG, Hemant, Jain', viewmodule: 'ELDM', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Capsize', serverIp: '10.1.402.135' },
    { date: '24-12-2018 10:00', username: 'BOG, Swati, Jain', viewmodule: 'Visual Analytics', action: 'View', details: 'BP Petrolium', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.202.135' },
    { date: '07-10-2015 10:00', username: 'BOG, Bansal, Abhishek', viewmodule: 'Home', action: 'Edit', details: 'Indexfile', searchCriteria: 'Year - 1985, Cause - Corrosion', serverIp: '10.8.402.135' },
    { date: '09-08-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Subscription', action: 'Search', details: 'Downstream', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.255' },
    { date: '12-07-2014 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Announcements', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.255' },
    { date: '30-03-2011 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Home', action: 'Add', details: 'Indexfile', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.5.402.135' },
    { date: '25-02-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'View', details: 'Upstream', searchCriteria: 'Year - 1985, Cause - Corrosion', serverIp: '10.6.402.135' },
    { date: '08-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'ELDM', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Capsize', serverIp: '10.2.402.135' },


  ]
}
