import { Component, OnInit } from '@angular/core';
import { NotificationMessage } from '../../shared/entity/notification-message';
import { ConfirmationModal } from './entities/confirmation-modal';
@Component({
  selector: 'terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {
  confirmationModal: ConfirmationModal;
  editMode: boolean;
  notificationMessage: NotificationMessage = new NotificationMessage();
  content:string;
  terms:string;
  constructor() {
    this.confirmationModal = new ConfirmationModal();
    this.confirmationModal.headerMessage = '';
    this.confirmationModal.bodyMessage = '';
  }


  ngOnInit() {

  }
  public termsOfUseData = [
    { Description: 'WTW Risk Intelligence Terms of Use', Date: '3-May-2018' },
    { Description: 'Energy Losses Terms of Use', Date: '24-Mar-2018' },
    { Description: 'Willis Towers Watson Terms', Date: '10-Mar-2018' },
    { Description: 'Energy losses Application Terms of Use- Ver1.1', Date: '09-Feb-2018' },
  ]
  onSuccess(message: string) {
    this.notificationMessage.successMessage = message;
  }

  onError(message: string) {
    this.notificationMessage.errorMessage = message;
  }
  onClose(): void {
  }

  onEdit() {

    this.editMode = true;
}

onEditLink(terms){
this.terms= terms;
}
onCancel() {
    this.editMode = false;
}
onCreateNew() {
  
}
}
