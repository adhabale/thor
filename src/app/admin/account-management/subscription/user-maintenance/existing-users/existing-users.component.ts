import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-existing-users',
  templateUrl: './existing-users.component.html',
  styleUrls: ['./existing-users.component.css']
})
export class ExistingUsersComponent implements OnInit {

  searchUserResult: boolean = false;
  isClientActive: boolean = false;
  searchUserName: string = '';
  isShowSuccess: boolean;

  constructor() { }

  ngOnInit() {
    this.isShowSuccess = false;
  }

  searchUser() {
    this.searchUserResult = true;
    this.isShowSuccess = false;
  }
  saveUserDetails() {
    this.isShowSuccess = true;
    $(window).scrollTop(0);
  }

  reset() {
    this.searchUserName = '';
    this.searchUserResult = false;
    this.isShowSuccess = false;
  }


}
