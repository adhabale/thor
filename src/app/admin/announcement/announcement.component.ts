import { Component, OnInit } from '@angular/core';
import { ConfirmationModal } from './entities/confirmation-modal';
import { FormsModule } from '@angular/forms';
import { AnnouncementModel } from '././models/announcement.model';
import { NotificationMessage } from '../../shared/entity/notification-message';
import * as _ from 'lodash';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent implements OnInit {
  confirmationModal: ConfirmationModal;
  announcement: Array<any>;
  titleFlag: boolean;
  dateFlag: boolean;
  notificationMessage: NotificationMessage = new NotificationMessage();

  constructor(private _announcementModel: AnnouncementModel) {
    this.confirmationModal = new ConfirmationModal();
    this.confirmationModal.headerMessage = '';
    this.confirmationModal.bodyMessage = '';
  }
  ngOnInit() {
  }

  public announcementsData = [
    { Title: 'Announcement 1', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '23-Aug-2018' },
    { Title: 'Announcement 2', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '24-Aug-2018' },
    { Title: 'Announcement 3', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '10-Jul-2018' },
    { Title: 'Announcement 4', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '09-Aug-2018' },
    { Title: 'Announcement 5', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '23-Oct-2018' },
    { Title: 'Announcement 6', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '23-May-2018' },
    { Title: 'Announcement 7', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '24-Jun-2018' },
    { Title: 'Announcement 8', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '10-Jul-2018' },
    { Title: 'Announcement 9', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '09-Aug-2018' },
    { Title: 'Announcement 10', Description: 'With effect from 21st May 2018, mining and metals losses will be removed from the Energy losses Database as they are not considered core energy risks.', Date: '23-Oct-2018' },
  ]
  openCreateAnnouncementModal() {
    document.getElementById('createAnnouncementModalBtn').click();
  }
  onEdit(announcement) {
    this._announcementModel.setAnnouncementDetails(this.announcement);
    document.getElementById('editAnnouncementModalBtn').click();
    this.notificationMessage = new NotificationMessage();
  }

  onDelete(announcement) {
    this.notificationMessage = new NotificationMessage();
    this._announcementModel.setAnnouncementDetails(announcement);
    let details=this._announcementModel.getAnnouncementDetails();
    this.confirmationModal.headerMessage = 'Delete Announcement';
    this.confirmationModal.bodyMessage = 'Are you sure you want to delete '+""+details.Title +'?';
    document.getElementById('deleteButton').click();
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
        this.notificationMessage.successMessage = "Annoucement deleted Successfully.";

  }
  sortByTitle() {
    if (this.titleFlag) {
      this.announcementsData = _.orderBy(this.announcementsData, ['Title'], ['asc']);
      this.titleFlag = !this.titleFlag;
    }
    else {
      this.announcementsData = _.orderBy(this.announcementsData, ['Title'], ['desc']);
      this.titleFlag = !this.titleFlag;
    }
  }
  sortByDate() {
    if (this.dateFlag) {
      this.announcementsData = _.orderBy(this.announcementsData, ['Date'], ['asc']);
      this.dateFlag = !this.dateFlag;
    }
    else {
      this.announcementsData = _.orderBy(this.announcementsData, ['Date'], ['desc']);
      this.dateFlag = !this.dateFlag;
    }
  }
}
