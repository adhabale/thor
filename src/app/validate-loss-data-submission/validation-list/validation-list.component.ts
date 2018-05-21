import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LossDataSubmissionModel } from '../shared/models/lossDataSubmission.model';
import * as _ from 'lodash';
@Component({
  selector: 'validation-list',
  templateUrl: './validation-list.component.html',
  styleUrls: ['./validation-list.component.css']
})
export class ValidationListComponent implements OnInit {

  constructor(private router: Router, private lossDataSubmissionModel: LossDataSubmissionModel) { }
  selectedLossType: any;
  idFlag: boolean; idFileRef: boolean; idName: boolean; idType: boolean; idSubmittedBy: boolean; idTime: boolean; idStatus: boolean; idStatusComment: boolean;
idReviewDate:boolean
  ngOnInit() {
    // this.lossDataSubmissionModel.setValidationFormType(false);
  }

  public lossDataSubmissionData = [
    { subId: '12345', referenceFile: '21242', customerName: 'British Petroleum', lossType: 'UpStream', submittedBy: 'John Davis', Date: '25-Apr-2018 13:05', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'All Information Valid' },
    { subId: '56524', referenceFile: '32312', customerName: 'Austria Oil and Gas', lossType: 'UpStream', submittedBy: 'John Davis', Date: '30-Apr-2018 13:10', Status: 'On-Hold', ReviewDate: '25-Apr-2018', StatusComment: 'Information not valid for further actions' },
    { subId: '32123', referenceFile: '54542', customerName: 'American Oil Inc.', lossType: 'Downstream', submittedBy: 'John Davis', Date: '30-Apr-2018 15:30', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'Not Valid Loss Type' },
    { subId: '87872', referenceFile: '29876', customerName: 'British Petroleum', lossType: 'Power', submittedBy: 'John Davis', Date: '30-Apr-2018 09:30', Status: 'On-Hold', ReviewDate: '25-Apr-2018', StatusComment: 'Need More Information' },
    { subId: '98981', referenceFile: '98262', customerName: 'British Petroleum', lossType: 'Power', submittedBy: 'John Davis', Date: '30-Apr-2018 10:45', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'Need More Information' },
    { subId: '76767', referenceFile: '64528', customerName: 'British Oil Inc.', lossType: 'UpStream', submittedBy: 'John Davis', Date: '30-Apr-2018 14:45', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'Valid' },
    { subId: '12332', referenceFile: '19092', customerName: 'Antar Petroleum', lossType: 'UpStream', submittedBy: 'John Davis', Date: '30-Apr-2018 15:30', Status: 'On-Hold', ReviewDate: '25-Apr-2018', StatusComment: 'Not Valid Loss Type' },
    { subId: '24314', referenceFile: '67261', customerName: 'British Petroleum', lossType: 'Downstream', submittedBy: 'John Davis', Date: '30-Apr-2018 13:50', Status: 'On-Hold', ReviewDate: '25-Apr-2018', StatusComment: 'Need More Information' },
    { subId: '87171', referenceFile: '19802', customerName: 'British Oil and Gas', lossType: 'UpStream', submittedBy: 'John Davis', Date: '30-Apr-2018 17:30', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'Need More Information' },
    { subId: '32123', referenceFile: '54542', customerName: 'Columbia Oil Inc.', lossType: 'Downstream', submittedBy: 'John Davis', Date: '30-Apr-2018 19:30', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'Information Done and Verified' },
    { subId: '87872', referenceFile: '29876', customerName: 'Canada Petroleum', lossType: 'Power', submittedBy: 'John Davis', Date: '30-Apr-2018 16:00', Status: 'On-Hold', ReviewDate: '25-Apr-2018', StatusComment: 'Information not valid' },
    { subId: '98981', referenceFile: '98262', customerName: 'British Petroleum', lossType: 'Power', submittedBy: 'John Davis', Date: '30-Apr-2018 17:40', Status: 'Submitted', ReviewDate: '25-Apr-2018', StatusComment: 'Information corrected but not verified' }

  ]
  openNewSubmissionModal() {
    document.getElementById('openSelectionModal').click();
  }
  openValidatePage(lossDataSubmission) {
    this.lossDataSubmissionModel.setValidationFormType(lossDataSubmission.lossType);
    this.lossDataSubmissionModel.setSubscriptionID(lossDataSubmission.subId);
    this.lossDataSubmissionModel.setStatus(lossDataSubmission.Status);
    this.router.navigate(['/validate-loss-data-submission/validate-LossDataForm']);
  }
  sortById() {
    if (this.idFlag) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['subId'], ['asc']);
      this.idFlag = !this.idFlag;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['subId'], ['desc']);
      this.idFlag = !this.idFlag;
    }
  }
  sortByFileRef() {
    if (this.idFileRef) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['referenceFile'], ['asc']);
      this.idFileRef = !this.idFileRef;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['referenceFile'], ['desc']);
      this.idFileRef = !this.idFileRef;
    }
  }
  sortByCustomerName() {
    if (this.idName) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['customerName'], ['asc']);
      this.idName = !this.idName;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['customerName'], ['desc']);
      this.idName = !this.idName;
    }
  }
  sortByType() {
    if (this.idType) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['lossType'], ['asc']);
      this.idType = !this.idType;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['lossType'], ['desc']);
      this.idType = !this.idType;
    }
  }
  sortBySubmittedBy() {
    if (this.idSubmittedBy) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['submittedBy'], ['asc']);
      this.idSubmittedBy = !this.idSubmittedBy;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['submittedBy'], ['desc']);
      this.idSubmittedBy = !this.idSubmittedBy;
    }
  }
  sortByTime() {
    if (this.idTime) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['Date'], ['desc']);
      this.idTime = !this.idTime;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['Date'], ['asc']);
      this.idTime = !this.idTime;
    }
  }
  sortByReviewDate() {
    if (this.idStatus) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['Status'], ['asc']);
      this.idStatus = !this.idStatus;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['Status'], ['desc']);
      this.idStatus = !this.idStatus;
    }
  }
  sortByStatus() {
    if (this.idStatus) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['Status'], ['asc']);
      this.idStatus = !this.idStatus;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['Status'], ['desc']);
      this.idStatus = !this.idStatus;
    }
  }
  sortByStatusComment() {
    if (this.idStatusComment) {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['StatusComment'], ['asc']);
      this.idStatusComment = !this.idStatusComment;
    }
    else {
      this.lossDataSubmissionData = _.orderBy(this.lossDataSubmissionData, ['StatusComment'], ['desc']);
      this.idStatusComment = !this.idStatusComment;
    }
  }
  onClose(): void {
  }
}
