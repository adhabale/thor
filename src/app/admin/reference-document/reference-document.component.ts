import { Component, OnInit } from '@angular/core';
import { ConfirmationModal } from './entities/confirmation-modal';
import { ReferenceDocumentModel } from '././models/referenceDocument.model';
import { NotificationMessage } from '../../shared/entity/notification-message';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-reference-document',
  templateUrl: './reference-document.component.html',
  styleUrls: ['./reference-document.component.css']
})
export class ReferenceDocumentComponent implements OnInit {
  confirmationModal: ConfirmationModal;
  refDoc: Array<any>;
  docFlag: boolean;
  typeFlag: boolean;
  notificationMessage: NotificationMessage = new NotificationMessage();

  constructor(private _referenceDocumentModel: ReferenceDocumentModel) {
    this.confirmationModal = new ConfirmationModal();
    this.confirmationModal.headerMessage = '';
    this.confirmationModal.bodyMessage = '';
  }
  ngOnInit() {
  }

  public ReferenceDocumentsData = [
    { Type: 'PDF', DocName: 'WTW Terms of Use' },
    { Type: 'DOC', DocName: 'New Policies' },
    { Type: 'PDF', DocName: 'Latest Report Formats' },
    { Type: 'XLS', DocName: 'Latest Process Flow' },
    { Type: 'PPT', DocName: 'WTW Terms of Use' },
    { Type: 'DOC', DocName: 'WTW Terms of Use' },
    { Type: 'PDF', DocName: 'Latest Report Formats' },
    { Type: 'XLSX', DocName: 'WTW Terms of Use' },
    { Type: 'DOC', DocName: 'New Policies' },
    { Type: 'PPT', DocName: 'Latest Process Flow' }
  ]
  openDocumentUploadModal() {
    document.getElementById('uploadReferenceDocumentsModalBtn').click();
  }
  sortByDoc() {
    if (this.docFlag) {
      this.ReferenceDocumentsData = _.orderBy(this.ReferenceDocumentsData, ['Type'], ['asc']);
      this.docFlag = !this.docFlag;
    }
    else {
      this.ReferenceDocumentsData = _.orderBy(this.ReferenceDocumentsData, ['Type'], ['desc']);
      this.docFlag = !this.docFlag;
    }
  }
  sortByType() {
    if (this.typeFlag) {
      this.ReferenceDocumentsData = _.orderBy(this.ReferenceDocumentsData, ['DocName'], ['asc']);
      this.typeFlag = !this.typeFlag;
    }
    else {
      this.ReferenceDocumentsData = _.orderBy(this.ReferenceDocumentsData, ['DocName'], ['desc']);
      this.typeFlag = !this.typeFlag;
    }
  }
  onEdit() {
    document.getElementById('editReferenceDocumentsModalBtn').click();
    this.notificationMessage = new NotificationMessage();
  }
  onDelete(refDoc) {
    document.getElementById('deleteBtn').click();
    this.notificationMessage = new NotificationMessage();
    this._referenceDocumentModel.setReferenceDocumentDetails(this.refDoc);
    this.confirmationModal.headerMessage = 'Delete Document';
    this.confirmationModal.bodyMessage = 'Are you sure you want to delete this Document?';
     }
  
  onSuccess(message: string) {
    this.notificationMessage.successMessage = message;
  }

  onError(message: string) {
    this.notificationMessage.errorMessage = message;
  }
  onClose(): void {
  }

    onDeleted(){
        this.notificationMessage.successMessage = "Reference Document deleted Successfully.";

  }
}
